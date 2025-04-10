"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


export default function SlideReview() {
  return (
    <div className="w-[367px] h-[455px] flex justify-center items-center lg:w-[703px] lg:h-[844px]">
      <Swiper
        className="mySwiper"
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
        <img 
        src="/reviews/review1_1x.png" 
        srcSet="/reviews/review1_1x.png 1x, /reviews/review1_2x.png 2x" 
        alt="Review 1" 
        className="size-full"
    />
        </SwiperSlide>
        <SwiperSlide>
        <img 
        src="/reviews/review2_1x.png" 
        srcSet="/reviews/review2_1x.png 1x, /reviews/review2_2x.png 2x" 
        alt="Review 2" 
        className="size-full"
    />
        </SwiperSlide>
        <SwiperSlide>
        <img 
        src="/reviews/review3_1x.png" 
        srcSet="/reviews/review3_1x.png 1x, /reviews/review3_2x.png 2x" 
        alt="Review 3" 
        className="size-full"
    />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
