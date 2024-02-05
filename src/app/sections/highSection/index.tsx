'use client';

import { PropertyHighCard } from '@/app/components/propertyHighCard';
import { SectionContainer } from '../../components/sectionContainer';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import Link from 'next/link';

interface HighSectionProps {
    data?:any;
    title:{
        name_pt_br:string;
        link_label_pt_br?: string;
        link?:string;
    };
    noPad?:boolean
}

export const HighSection = ({data, title, noPad}: HighSectionProps) => {
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
        <>
        <SectionContainer
            extraClass={"pt-52 lg:pt-16 relative z-30"}
            title={title}
            noPad={noPad}
            bg="bg-secondary"
            color={"text-soft"}
            hover={"text-white"}
            border={"border-soft"}
            link={'/imoveis'}
        >
            <div className="carousel-container high">
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
            {(title?.link_label_pt_br && title?.link) && <div className="mobile-link"><Link href={title.link}>{title?.link_label_pt_br}</Link></div>}
            <svg className="bg-detail" viewBox="0 0 1920 859" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{mixBlendMode:'multiply'}}>
                <path d="M1598.98 -773L1298.39 -472.517L997.812 -773L-295 519.385L946.024 1760L1246.61 1459.52L1547.19 1760L2840 467.615L1598.98 -773ZM946.024 1644.91L-179.868 519.385L997.812 -657.906L1240.82 -414.983L306.139 519.385L1189.03 1401.98L946.024 1644.91ZM1304.16 1401.98L2238.84 467.615L1588 -183.008L1530.45 -125.473L1530.55 -125.373L845.721 559.252L903.274 616.786L1588.12 -67.8383L2123.73 467.589L1246.61 1344.42L421.296 519.385L1274 -333.035H1273.97L1387.54 -446.619H1387.57L1598.98 -657.931L2724.87 467.589L1547.16 1644.91L1304.16 1401.98Z" fill="url(#paint0_linear_206_1185)" fillOpacity="0.25"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_206_1185" x1="1272.5" y1="-773" x2="1272.5" y2="1760" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3C2222"/>
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
                </linearGradient>
                </defs>
            </svg>
        </SectionContainer>
        </>
    )
}