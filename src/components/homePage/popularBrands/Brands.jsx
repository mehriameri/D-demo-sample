import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { SparklesIcon } from '../../shared/UI/Icons';
import BrandsList from '../../../data/jsonFiles/body/brands.json';
import Carousel from '../../shared/UI/carousel/Carousel';

const Brands = () => {
    console.log('Brands-rendering')
    return (
        <div className='w-full bg-white border border-gray-300 rounded-xl my-6'>
            <div className='flex gap-2 justify-center items-end my-4'>
                <SparklesIcon className='text-yellow-500 font-bold w-6 h-6' />
                <p className='font-semibold text-lg text-center'>محبوب‌ترین برندها</p>
            </div>
            <Carousel slidPerView={8}>
                {BrandsList.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className='flex justify-center items-center border-l border-l-gray-300 h-28 my-6 p-4'>
                            <img src={item} alt="" className='w-28' />
                        </div>
                    </SwiperSlide>)}
            </Carousel>
        </div>
    )
}

export default Brands;