'use client';

import { SectionContainer } from '../../components/sectionContainer';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { ActionButton } from '@/app/components/actionButton';
import { PropertyCard } from '@/app/components/propertyCard';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PropertiesSectionProps {
    data?:any;
    buttons?:{
        name_pt_br:string;
        link:string;
    }[];
    title:{
        name_pt_br:string;
        link_label_pt_br?: string;
        link?:string;
        description_pt_br?:string;
    };
}

export const PropertiesSection = ({data, title, buttons}: PropertiesSectionProps) => {
    const router = useRouter()
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

    const action = (link:string) => {
        router.push(link)
    }

    return(
        <SectionContainer
            extraClass={"pt-0 lg:pt-16"}
            title={title}
            color={"text-primary"}
            hover={"text-soft"}
            bg={'bg-ultralight'}
            border={"border-primary"}
        >
            {buttons && <div className="container-region-filter">
                <div className="region-filter-title">
                    <p>{title?.description_pt_br}</p>
                </div>
                <div className="region-buttons">
                    {buttons.map((button, index) => (
                        <ActionButton
                            key={index}
                            action={() => action(button.link)}
                            text={button.name_pt_br}
                            color={"text-primary bg-transparent border-primary"}
                            hover={"hover:bg-primary hover:text-white"}
                        />
                    ))}
                </div>
            </div>}
            <div className="carousel-container">
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
                    className="propertiesSwiper"
                >
                    {data.map((property: any, index: number) => (
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
            </div>
            {title?.link_label_pt_br && <div className="mobile-link">{title?.link_label_pt_br}</div>}
        </SectionContainer>
    )
}