'use client';

import ConstructionGallery from '@/app/components/constructionGallery';
import './styles.css'
import { IoMdCheckmark } from "react-icons/io";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import Fancybox from '@/app/utils/Fancybox';

interface EnterpriseConstructionProps{
    data:{
        enumeration:{
            items:{
                name_pt_br:string;
                link:string;
              }[]
        },
        gallery:{
            images:{
                src:string;
            }[]
        }
    };
}

export default function EnterpriseConstructionSkills({data}: EnterpriseConstructionProps) {
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
        <div className="enterprise-skills-container">
            {data?.enumeration?.items?.length > 0 || data?.gallery?.images?.length && <h3>O empreendimento</h3>}
            {data?.enumeration?.items?.length > 0 &&
            <>
            <h5>Características</h5>
            <div className="enterprise-skills">
                {data.enumeration.items.map((skill, index) => (
                    <span key={index}><IoMdCheckmark />{skill.name_pt_br}</span>
                ))}
            </div>
            </>
            }
            {data?.gallery?.images?.length > 0 &&
                <>
                <div className="gallery-construction-container desktop">
                    <ConstructionGallery gallery={data.gallery?.images}/>
                </div>
                <div className="gallery-construction-container mobile">
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
                    {data.gallery?.images.map((photo: any, index: number) => (
                        <SwiperSlide key={index}>
                            <Fancybox
                                key={index}
                                options={{ infinite: false }}
                                href={photo.image}
                                delegate="[data-fancybox='gallery']"
                            >
                                {/*eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    className="enterprise-photo"
                                    src={photo.image}
                                    data-fancybox="gallery"
                                    data-src={photo.image}
                                    alt={photo.alt_pt_br}
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
                </div>
                </>
            }
        </div>
    )
}
