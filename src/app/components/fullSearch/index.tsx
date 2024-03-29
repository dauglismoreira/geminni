import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import './styles.css';
import { PropertyMiniCard } from '../propertyMiniCard';
import fetchData from '@/app/helpers/fetchData.js';
import Link from 'next/link.js';
import { PostMiniCard } from '../postMiniCard';

interface FullSearchProps{
    openFullSearch:boolean;
    onClose: () => void;
}

const FullSearch = ({ openFullSearch, onClose }:FullSearchProps) => {

  const [search, setSearch] = useState<string>('')
  const [properties, setProperties] = useState([])
  const [posts, setPosts] = useState([])
  const [postsTotal, setPostsTotal] = useState(0)
  const [propertiesTotal, setPropertiesTotal] = useState(0)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const bodyElement = document.querySelector('html');
        if (bodyElement) {
            if (openFullSearch) {
                bodyElement.style.overflow = 'hidden';
            } else {
                bodyElement.style.overflow = '';
            }
        }
    }, [openFullSearch]);

    useEffect(() => {
      if(search.length > 2){
        if (timeoutIdRef.current) {
          clearTimeout(timeoutIdRef.current);
        }
        timeoutIdRef.current = setTimeout(() => {
          fetchData(`property?search=${search}`)
          .then(response => {
            setProperties(response.data.properties.data)
            setPropertiesTotal(response.data.properties.total)
          })

          fetchData(`post?search=${search}`)
          .then(response => {
            setPosts(response.data.posts.data)
            setPostsTotal(response.data.posts.total)
          })
        }, 1000);
      }else{
        setProperties([])
        setPosts([])
        setPropertiesTotal(0)
        setPostsTotal(0)
      }
    }, [search])

    const resultSelect = () => {
      setTimeout(() => {
        onClose()
      }, 500);
    }

  return (
    <div className={`full-search ${openFullSearch ? 'open' : 'close'}`}>
      <div className={`full-search-close ${openFullSearch ? 'open' : 'close'}`}>
        <MdClose onClick={onClose}/>
      </div>
      <div className="container-search">
        <div className={`full-search-bar ${openFullSearch ? 'open' : 'close'}`}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="O que você procura?"
          />
          <IoSearchOutline />
        </div>
        <div className={`container-result ${openFullSearch ? 'open' : 'close'}`}>
            {properties.length > 0 && <h3>{search}({(postsTotal !== 0 || propertiesTotal !== 0) && postsTotal + propertiesTotal})</h3>}
            {properties.length > 0 && <p className="mb-4 mt-4">Imóveis</p>}
            <div className="container-properties">
                {properties.slice(0,4).map((property, index) => (
                  <div onClick={resultSelect} key={index}>
                    <PropertyMiniCard data={property}/>
                  </div>
                ))}
                {search !== '' && (properties.length === 0 && posts.length === 0) &&
                  <p>Não foram encontrados resultados.</p>
                }
            </div>
            {properties.length > 0 && <Link href="/imoveis" className="mt-4">Clique aqui para ver todos os empreendimentos</Link>}
            <span className="mt-4 mb-8 w-full border-ultralight border-b block"></span>
            {posts.length > 0 && <p className="mb-4">Regiões</p>}
            <div className="container-properties">
                {posts.slice(0,4).map((post, index) => (
                  <div onClick={resultSelect} key={index}>
                    <PostMiniCard data={post}/>
                  </div>
                ))}
            </div>
            {posts.length > 0 && <Link href="/regioes" className="mb-4">Clique aqui para ver todas as regiões</Link>}
        </div>
      </div>
    </div>
  );
};

export default FullSearch;