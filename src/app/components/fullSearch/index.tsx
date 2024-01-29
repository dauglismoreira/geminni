import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import './styles.css';
import { PropertyMiniCard } from '../propertyMiniCard';
import fetchData from '@/app/helpers/fetchData.js';
import Link from 'next/link.js';

interface FullSearchProps{
    openFullSearch:boolean;
    onClose: () => void;
}

const FullSearch = ({ openFullSearch, onClose }:FullSearchProps) => {

  const [search, setSearch] = useState<string>('')
  const [properties, setProperties] = useState([])
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const bodyElement = document.querySelector('body');
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
        }, 1000);
      }
    }, [search])

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
            {properties.length > 0 && <h3>{search}({properties.length})</h3>}
            <Link href="/empreendimentos" className="mt-4">Clique aqui para ver todos os empreendimentos</Link>
            <div className="container-properties">
                {properties.map((property, index) => (
                    <PropertyMiniCard key={index} data={property}/>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FullSearch;