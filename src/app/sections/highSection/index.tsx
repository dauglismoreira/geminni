'use client';

import { PropertyHighCard } from '@/app/components/propertyHighCard';
import { SectionContainer } from '../../components/sectionContainer';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

interface HighSectionProps {
    data?:any;
    title:{
        title:string;
        link?: string;
        linkText?:string;
    };
}

export const HighSection = ({data, title}: HighSectionProps) => {
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

    return(
        <SectionContainer
            extraClass={"pt-52 lg:pt-16"}
            title={title}
            bg="bg-secondary"
            color={"light"}
            hover={"white"}
        >
            <div className="carousel-container">
                <Swiper
                    slidesPerView={2}
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
                        slidesPerView: 2,
                        spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className="highPropertiesSwiper"
                >
                    {data.map((property: any, index: number) => (
                        <SwiperSlide key={index}>
                            <PropertyHighCard data={property}/>
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
            </div>
            {title.linkText && <div className="mobile-link">{title.linkText}</div>}
        </SectionContainer>
    )
}