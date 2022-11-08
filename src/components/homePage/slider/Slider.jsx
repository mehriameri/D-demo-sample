import React from 'react';
import sliderImage from '../../../data/jsonFiles/body/imageSlider.json';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';

const Slider = () => {
    console.log('Slider-rendering')
    return (
        <div className='relative'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                navigation
                slidesPerView={1}
                speed={100}
                loop
                effect
                autoplay={{ delay: 5000 }} 
            >
                {sliderImage.map((img, index) =>
                    <SwiperSlide key={index}>
                        <img src={img} alt="" />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Slider;
