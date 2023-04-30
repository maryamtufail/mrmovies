

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper";

export default function Hero() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
       
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/Images/1.jpg"  alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/2.jpg" alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/3.jpg"  alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/4.jpg"  alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/5.jpg"  alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/6.jpg"  alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/5.jpg"  alt="img"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/4.jpg"  alt="img"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
