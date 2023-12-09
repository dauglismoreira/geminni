'use client';

import { useEffect, useState } from 'react';
import './styles.css'
import { MdOutlineContentCopy, MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md'

interface PriceContainerProps{
    enterprise:{
        cod:number,
        price:number
    }
}

export default function PriceContainer({enterprise}: PriceContainerProps) {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const contentHeight = document.body.scrollHeight;
  
        if (scrollY >= 740 && scrollY <= (contentHeight - 1600)) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="price-box">
        <div className={`price-container ${isFixed ? 'fixe' : ''}`}>
            <div className="price-label">
                <p>Valor do imóvel</p>
                <p>Cód.: {enterprise.cod}</p>
            </div>
            <h3>{(enterprise.price / 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
            <div className="line"></div>
            <div className="contact-buttons">
                <button className="info-button">Receber mais informações</button>
                <button className="wht-button"><MdOutlineWhatsapp />Whatsapp</button>
            </div>
            <div className="share-container">
                <p>Compartilhamento</p>
                <div className="share-icons">
                    <MdOutlineContentCopy />
                    <MdOutlineEmail />
                    <MdOutlineWhatsapp />
                </div>
            </div>
        </div>
    </div>
  )
}
