'use client';

import { useEffect, useState } from 'react';
import './styles.css'
import { MdOutlineContentCopy, MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md'
import useScreenSize from '@/app/hooks/useScreenSize';
import Link from 'next/link';

interface PriceContainerProps{
    data:{
        sku:any,
        value:any
    }
    configs:any;
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

export default function PriceContainer({data, configs}: PriceContainerProps) {
    const [containerWidth, setContainerWidth] = useState<number | null>(null);
    const [isFixed, setIsFixed] = useState(false);
    const {width} = useScreenSize(1024)
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
      const url = window.location.href;
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    };

    const sendByEmail = () => {
      const url = window.location.href;
      const subject = encodeURIComponent('Confira este imóvel');
      const body = encodeURIComponent(`Veja este incrível imóvel: ${url}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    const shareToWhatsApp = () => {
      window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(window.location.href), '_blank')
    };

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

    useEffect(() => {
        const containerElement = document.getElementById('priceContainer');
        if (containerElement) {
          const width = containerElement.getBoundingClientRect().width;
          setContainerWidth(width);
        }
    }, [width])

    console.log(configs.data[0].configs[2].description.replace(/[\s-]/g, ''))

  return (
    <div className="price-box">
        <div
          id="priceContainer"
          style={{minWidth: `${containerWidth ? containerWidth : 0}px`}}
          className={`price-container ${isFixed ? 'fixe' : ''}`}
        >
            <div className="price-label">
                <p>Valor do imóvel</p>
                <p>Cód.: {data?.sku}</p>
            </div>
            <h3>{parseInt(data?.value)?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
            <div className="line"></div>
            <div className="contact-buttons">
                <button className="info-button" onClick={() => scrollToSection('localizacao')}>Receber mais informações</button>
                <button className="wht-button">
                  <Link href={`https://wa.me/${configs.data[0].configs[2].description.replace(/[\s-]/g, '')}`} target="_blank">
                    <MdOutlineWhatsapp />Whatsapp
                  </Link>
                </button>
            </div>
            <div className="share-container">
                <p>Compartilhamento</p>
                <div className="share-icons">
                    <MdOutlineContentCopy  onClick={copyToClipboard}/>
                    <MdOutlineEmail onClick={sendByEmail}/>
                    <MdOutlineWhatsapp onClick={shareToWhatsApp}/>
                </div>
                {copied ? <p>Copiado para área de transferência</p> : <></>}
            </div>
        </div>
    </div>
  )
}
