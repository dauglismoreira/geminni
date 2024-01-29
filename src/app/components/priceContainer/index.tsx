'use client';

import { useEffect, useState } from 'react';
import './styles.css'
import { MdOutlineContentCopy, MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md'

interface PriceContainerProps{
    data:{
        sku:any,
        value:any
    }
}

const scrollToSection = (id: string) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth',
    });
  }
};

export default function PriceContainer({data}: PriceContainerProps) {

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
                <p>Cód.: {data?.sku}</p>
            </div>
            <h3>{parseInt(data?.value)?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
            <div className="line"></div>
            <div className="contact-buttons">
                <button className="info-button" onClick={() => scrollToSection('localizacao')}>Receber mais informações</button>
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
