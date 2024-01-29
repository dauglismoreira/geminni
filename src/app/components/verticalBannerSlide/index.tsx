'use client'

import React, { useState, useEffect } from 'react';
import './styles.css'
import getStorageFile from '@/app/helpers/getStorageFile';


export interface BannerImageProps {
    path:string;
    alt:string;
}

interface BannerProps {
    images?: BannerImageProps[];
    autoPlayTime?: number;
    auto?: boolean;
}

export const BannerVerticalSlide: React.FC<BannerProps> = ({ autoPlayTime, auto, images = [] }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(auto ? auto : false);
    const autoPlayInterval = autoPlayTime;

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (autoPlay && images) {
            intervalId = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }, autoPlayInterval);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [autoPlay, images, autoPlayInterval]);

    const handleBannerMouseEnter = () => {
        setAutoPlay(false);
    };

    const handleBannerMouseLeave = () => {
        setAutoPlay(true);
    };

    return (
      images.length > 0 ?
      <div className="slide-container" onMouseEnter={handleBannerMouseEnter} onMouseLeave={handleBannerMouseLeave}>
        <div className="slide-navigation">
          {images.map((image, index) => (
            <span
                key={index}
                className={`${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
        <div className="slide-wrapper" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
          {images.map((image:any, index) => (
            <div
              className={`slide-image ${index === activeIndex ? 'active' : ''}`}
              key={index}
              style={{ backgroundImage: `url("${getStorageFile(image.src)}")` }}
            ></div>
          ))}
        </div>
      </div>
      :
      <div className="mt-40"></div>
    );
}