'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { BlogCard } from '@/app/components/blogCard';
import './styles.css';

interface AboutPostsProps {
    blogCards:any;
    subtitle:string;
}

export const AboutPosts = ({ blogCards, subtitle }: AboutPostsProps) => {
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
    <div className="about-posts">
        <div className="vertical-line"></div>
        <h3 className="subtitle">{subtitle}</h3>
        <div className="container-posts">
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
                  1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  },
                  1600: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
              }}
                  modules={[Navigation, Mousewheel, Keyboard]}
                  className="aboutSwiper"
              >
                  {blogCards.map((post:any, index:number) => (
                      <SwiperSlide key={index}>
                          <BlogCard data={post}/>
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
    </div>
    )
};