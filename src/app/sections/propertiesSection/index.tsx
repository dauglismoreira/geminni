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

interface PropertiesSectionProps {
    data?:any;
    filterButtons?:{
        text:string;
        action:string;
    }[];
    title:{
        title:string;
        link?: string;
        linkText?:string;
    };
}

export const PropertiesSection = ({data, title, filterButtons}: PropertiesSectionProps) => {
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

    const teste = () => {
        console.log('teste')
    }

    return(
        <SectionContainer
            extraClass={"pt-0 lg:pt-16"}
            title={title}
            color={"primary"}
            hover={"light"}
            bg={'bg-ultralight'}
        >
            {filterButtons && <div className="container-region-filter">
                <div className="region-filter-title">
                    <p>Escolha a região que você gostaria de estar</p>
                </div>
                <div className="region-buttons">
                    {filterButtons.map((button, index) => (
                        <ActionButton
                            key={index}
                            action={() => teste()}
                            text={button.text}
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
                        1024: {
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
            {title.linkText && <div className="mobile-link">{title.linkText}</div>}
        </SectionContainer>
    )
}