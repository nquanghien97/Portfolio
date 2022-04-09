import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Image from 'next/image';
import adidas from '../Assets/adidas.png'
import music from '../Assets/music.png'
import tesla from '../Assets/tesla.png'

export interface  MyPortfolioProps {
}

export default function MyPortfolio (props: MyPortfolioProps) {
  return (
    <div className="portfolio flex justify-center mx-auto w-[100vw]">
      <div className="text-black w-5/6 flex flex-col justify-center items-center">
        <h1 className="font-medium leading-tight text-5xl my-4">My Portfolio</h1>
        <p>I love what I do. I take great pride in what I do.</p>
        <div className="slide w-20 h-0.5 bg-slate-400 my-6"></div>
        <div className="w-full h-full relative">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="w-full h-[30vh] md:h-[100vh]">
                <Image
                  src={adidas} 
                  layout="fill"
                  className="" 
                  alt="Logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[30vh] md:h-[100vh]">
                <Image
                  src={music}
                  layout="fill"
                  className="" 
                  alt="Logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[30vh] md:h-[100vh]">
                <Image
                  src={tesla} 
                  layout="fill"
                  className="" 
                  alt="Logo"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </div>
  );
}
