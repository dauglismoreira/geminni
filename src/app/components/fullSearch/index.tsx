import React, { useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import {properties} from './mock.js';
import './styles.css';
import { PropertyMiniCard } from '../propertyMiniCard';

interface FullSearchProps{
    openFullSearch:boolean;
    onClose: () => void;
}

const FullSearch = ({ openFullSearch, onClose }:FullSearchProps) => {

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

  return (
    <div className={`full-search ${openFullSearch ? 'open' : 'close'}`}>
      <div className={`full-search-close ${openFullSearch ? 'open' : 'close'}`}>
        <MdClose onClick={onClose}/>
      </div>
      <div className="container-search">
        <div className={`full-search-bar ${openFullSearch ? 'open' : 'close'}`}>
          <input type="text" placeholder="O que você procura?" />
          <IoSearchOutline />
        </div>
        <div className={`container-result ${openFullSearch ? 'open' : 'close'}`}>
            <h3>Apartamento frente mar(5)</h3>
            <a>Clique aqui para ver todos os empreendimentos</a>
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