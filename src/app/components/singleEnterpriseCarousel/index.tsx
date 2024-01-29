'use client';

import './styles.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import Fancybox from '@/app/utils/Fancybox';

interface SingleEnterpriseCarouselProps{
    gallery:{
        src:string;
    }[]
}

export default function SingleEnterpriseCarousel({gallery}: SingleEnterpriseCarouselProps) {
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
    gallery?.length > 0 &&
    <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={false}
        loop={true}
        navigation={{
            prevEl: '.custom-prev-button',
            nextEl: '.custom-next-button',
        }}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="singlePropertySwiper"
    >
        {gallery.map((photo: any, index: number) => (
            <SwiperSlide key={index}>
                <Fancybox
                    key={index}
                    options={{ infinite: false }}
                    href={photo.src}
                    delegate="[data-fancybox='gallery']"
                >
                    <img
                        className="enterprise-photo"
                        src={photo.src}
                        alt={photo.alt_pt_br}
                        data-fancybox="gallery"
                        data-src={photo.src}
                    ></img>
                </Fancybox>

            </SwiperSlide>
        ))}
        <div
            onClick={handlePrevClick}
            className="custom-button custom-prev-button"
        ><MdOutlineArrowBackIosNew /></div>
        <div
            onClick={handleNextClick}
            className="custom-button custom-next-button"
        ><MdOutlineArrowForwardIos /></div>
    </Swiper>
  )
}
