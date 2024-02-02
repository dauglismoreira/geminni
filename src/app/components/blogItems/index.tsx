'use client';

import fetchDataFilter from '@/app/helpers/fetchDataFilter';
import { BlogCard } from '../blogCard'
import BlogFilters from '../blogFilters';
import {useEffect, useState} from 'react';
import LoadingSpinner from '../loading';

interface BlogFiltersProps {
    data:any;
    configs:any;
}

export default function Blog({data, configs}:BlogFiltersProps) {
    const [posts, setPosts] = useState<any>([])
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState([])
    const [finalPage, setFinalPage] = useState(false)

    useEffect(() => {
        setPosts(data.data.posts.data)
    }, [data])

    const fetchDataFields = (fields: any) => {    
        setLoading(true)
        setFinalPage(false)
        setFilters(fields)  
        setPage(1)  
        fetchDataFilter('post', fields, 1)
          .then((data) => {
            setPosts(data.data.posts.data);
            if(!data.data.posts.next_page_url){
                setFinalPage(true)
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            let triggerPosition;
      
            if (window.innerWidth >= 768) {
              triggerPosition = docHeight - 100;
            } else {
              triggerPosition = docHeight - 800;
            }
      
            const windowBottom = windowHeight + window.pageYOffset;
    
          if (windowBottom >= triggerPosition && !finalPage && !loading) {
            setPage((prevPage) => prevPage + 1)
            setLoading(true)
            fetchDataFilter('post', filters, page + 1)
            .then((data) => {
                setPosts((prevPosts:any) => [...prevPosts, ...data.data.posts.data]);
                if(!data.data.posts.next_page_url){
                    setFinalPage(true)
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [loading]);  

  return (
    <>
        <div className="news-search-bar">
            <BlogFilters
                fetchDataFields={fetchDataFields}
                data={configs.data.filter((configs:any) => configs.name === 'Filtro rápido')[0]}
            />
        </div>
        <div className="news-search-list">
            {posts.length === 0 && <p>Não foram encontrados resultados.</p>}
            {posts.length > 0 && posts.map((post:any, index:number) => (
                <BlogCard key={index} data={post}/>
            ))}
            {loading && <LoadingSpinner/>}
        </div>
    </>
  )
}