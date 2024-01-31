'use client';

import fetchDataFilter from '@/app/helpers/fetchDataFilter';
import { BlogCard } from '../blogCard'
import BlogFilters from '../blogFilters';
import {useEffect, useState} from 'react';

interface BlogFiltersProps {
    data:any;
    configs:any;
}

export default function Blog({data, configs}:BlogFiltersProps) {
    const [posts, setPosts] = useState<any>([])

    useEffect(() => {
        setPosts(data.data.posts.data)
    }, [data])

    const fetchDataFields = (fields: any) => {        
        fetchDataFilter('post', fields)
          .then((data) => {
            setPosts(data.data.posts.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };

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
        </div>
    </>
  )
}