import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Fade from 'react-reveal/Fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Image from 'next/image';
import adidas from '../assets/adidas.png'
import music from '../assets/music.png'
import tesla from '../assets/tesla.png'
import crudCountry from '../assets/crud-country.png'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function MyPortfolio () {
  return (
    <>
      <Fade left>
        <div id="portfolio" className="flex justify-center mx-auto mb-12 pt-8">
          <div className="text-black w-5/6 flex flex-col justify-center items-center">
            <h1 className="font-medium leading-tight text-5xl my-4">My Project</h1>
            <p>I love what I do. I take great pride in what I do.</p>
            <div className="slide w-20 h-0.5 bg-slate-400 my-6"></div>
            <div className="w-full h-full">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <div className="image w-full h-[30vh] md:h-[100vh] relative">
                    <Image
                      src={adidas} 
                      layout="fill"
                      className="-z-10" 
                      alt="Ecommerce Website"
                    />
                    <div className="overlay absolute inset-0 bg-gray-300/[0.7] justify-center items-center hidden">
                      <a 
                        href="https://hien-ecommerce.netlify.app/"
                        target='blank'
                        className="absolute px-8 py-4 bg-sky-800 hover:bg-amber-500 rounded text-white"
                      >
                        Visit now
                        <ArrowRightAltIcon className="ml-2"/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image w-full h-[30vh] md:h-[100vh] relative">
                    <Image
                      src={crudCountry} 
                      layout="fill"
                      className="-z-10" 
                      alt="CRUD country"
                    />
                    <div className="overlay absolute inset-0 bg-gray-300/[0.7] justify-center items-center hidden">
                      <a 
                        href="https://crud-country.netlify.app/"
                        target='blank'
                        className="absolute px-8 py-4 bg-sky-800 hover:bg-amber-500 rounded text-white"
                      >
                        Visit now
                        <ArrowRightAltIcon className="ml-2"/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image w-full h-[30vh] md:h-[100vh] relative">
                    <Image
                      src={music}
                      layout="fill"
                      className="-z-10" 
                      alt="MusicPlayer"
                    />
                    <div className="overlay absolute inset-0 bg-gray-300/[0.7] justify-center items-center hidden">
                      <a 
                        href="https://nquanghien97.github.io/MusicPlayer-client/"
                        target='blank'
                        className="absolute px-8 py-4 bg-sky-800 hover:bg-amber-500 rounded text-white"
                      >
                        Visit now
                        <ArrowRightAltIcon className="ml-2"/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image w-full h-[30vh] md:h-[100vh] relative">
                    <Image
                      src={tesla} 
                      layout="fill"
                      className="-z-10" 
                      alt="Tesla"
                    />
                    <div className="overlay absolute inset-0 bg-gray-300/[0.7] justify-center items-center hidden">
                      <a 
                        href="https://hien-teslaclone.netlify.app/"
                        target='blank'
                        className="absolute px-8 py-4 bg-sky-800 hover:bg-amber-500 rounded text-white"
                      >
                        Visit now
                        <ArrowRightAltIcon className="ml-2"/>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
