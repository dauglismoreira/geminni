'use client';

import { useEffect, useState } from 'react';
import { ActionButton } from '../actionButton'
import './styles.css'

const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 150,
        behavior: 'smooth',
      });
    }
  };

export default function AnchorMenu() {

  const filterButtons = [
      {
          text:'Imagens',
          action:() => scrollToSection('imagens')
      },
      {
          text:'Características',
          action:() => scrollToSection('caracteristicas')
      },
      {
          text:'Planta',
          action:() => scrollToSection('planta')
      },
      {
          text:'Tour Virtual',
          action:() => scrollToSection('tour')
      },
      {
          text:'Vídeo',
          action:() => scrollToSection('video')
      },
      {
          text:'O Empreendimento',
          action:() => scrollToSection('empreendimento')
      },
      {
          text:'Localização',
          action:() => scrollToSection('localizacao')
      },
  ]

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;

      let scrollThreshold;

      if (windowWidth >= 1024) {
        scrollThreshold = 740;
      } else {
        scrollThreshold = 400;
      }

      if (scrollY >= scrollThreshold) {
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
    <div className={`anchor-menu-container ${isFixed ? 'fixe' : ''}`}>
        <div className="anchor-menu-width">
        {filterButtons.map((button, index) => (
            <ActionButton
                key={index}
                action={() => button.action()}
                text={button.text}
                color={"text-primary bg-transparent border-primary"}
                hover={"hover:bg-primary hover:text-white"}
            />
        ))}
        </div>
    </div>
  )
}
