'use client';

import './styles.css'
import { PropertyCard } from '@/app/components/propertyCard'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import fetchData from '@/app/helpers/fetchData';
import {useEffect, useState} from 'react'

interface RelatedPropertiesProps{
    title:string;
    id?:any;
    region?:any;
}

export default function RelatedProperties({title, id, region}: RelatedPropertiesProps) {
    const [relatedProperties, setRelatedProperties] = useState<any[]>([])
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

    useEffect(() => {
        fetchData(`property/related-property?region_id=${region ? region : 1}${id ? `&residential_property_id=${id}` : ''}`)
        .then((data) => setRelatedProperties(data.data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

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
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1360: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1620: {
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
