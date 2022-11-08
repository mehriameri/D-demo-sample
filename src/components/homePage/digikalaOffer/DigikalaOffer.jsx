import React from 'react';
import digikalaOfferList from '../../../data/jsonFiles/body/digikalaOffer.json';
import Carousel from '../../shared/UI/carousel/Carousel';
import { SwiperSlide } from 'swiper/react';

const DigikalaOffer = () => {
    console.log('DigikalaOffer-rendering')
    return (
        <div className='w-full mb-4'>
            <p className='font-bold text-xl text-center my-6'>پیشنهاد دیجی‌کالا</p>
            <div className='bg-white rounded-2xl border border-gray-300'>
                <Carousel slidPerView={9}>
                    {digikalaOfferList.map((item, index) =>
                        <SwiperSlide key={index} >
                            <div className='bg-white border-l border-l-gray-300 py-6 m-2' >
                                <div className='flex justify-center'>
                                    <span className='bg-white border border-gray-300 rounded-full p-4'>
                                        <img src={item.img} alt="" className='w-14 h-14' />
                                    </span>
                                </div>
                                <p className='text-sm text-center py-2'>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default DigikalaOffer;
