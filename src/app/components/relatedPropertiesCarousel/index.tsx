'use client';

import './styles.css'
import { PropertyCard } from '@/app/components/propertyCard'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';

interface RelatedPropertiesProps{
    relatedProperties:any;
    title:string;
}

export default function RelatedProperties({relatedProperties, title}: RelatedPropertiesProps) {
    const swiper = useSwiper();

    const handlePrevClick = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

  return (
    <>
        <h3 className="related-title">{title}</h3>
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            centeredSlides={false}
            loop={true}
            navigation={{
                prevEl: '.custom-prev-button',
                nextEl: '.custom-next-button',
            }}
            breakpoints={{
                300: {
                slidesPerView: 1,
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                },
            }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="relatedPropertiesSwiper"
        >
            {relatedProperties.map((property: any, index: number) => (
                <SwiperSlide key={index}>
                    <PropertyCard data={property}/>
                </SwiperSlide>
            ))}
            <div className="button-container-left">
                <div
                    onClick={handlePrevClick}
                    className="custom-button custom-prev-button"
                ><MdOutlineArrowBackIosNew /></div>
            </div>
            <div className="button-container-right">
                <div
                    onClick={handleNextClick}
                    className="custom-button custom-next-button"
                ><MdOutlineArrowForwardIos /></div>
            </div>
        </Swiper>
    </>
  )
}
