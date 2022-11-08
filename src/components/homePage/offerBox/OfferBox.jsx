import React from 'react';
import offBox from '../../../assets/img/box.png';
import OfferBoxItem from './OfferBoxItem';
import offerBox from '../../../data/jsonFiles/body/offerBoxList.json';
import Carousel from '../../shared/UI/carousel/Carousel';
import { ArrowLeft, ArrowLeftIcon } from '../../shared/UI/Icons';
import { SwiperSlide } from 'swiper/react';

const OfferBox = () => {
  console.log('OfferBox-rendering')
  return (
    <div className='w-full flex items-center gap-2 bg-red-500 lg:rounded-xl my-4 px-0.5'>
      <div className='w-auto lg:w-[145px] flex flex-col items-center flex-shrink-0 text-white py-5'>
        <img src="https://www.digikala.com/statics/img/svg/amazing-typo.svg" alt="amazing-typo" className='w-16 h-16 mx-auto' />
        <img src={offBox} alt="" className='w-24 h-24 mx-auto' />
        <div className='flex items-end text-xs justify-center py-4' >
          <p className='flex flex-shrink-0'>مشاهده همه</p>
          <ArrowLeftIcon className='w-3 h-3 flex flex-shrink-0' />
        </div>
      </div>
      <div className='flex-grow overflow-x-hidden'>
        <Carousel slidPerView={6}>
          {offerBox.map((item, index) =>
            <SwiperSlide key={index}>
              <OfferBoxItem
                image={item.img}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                off={item.offPercent}
              />
            </SwiperSlide>)}
          <SwiperSlide>
            <div className='flex flex-col items-center justify-center px-1 h-full'>
              <div className='flex'>
                <span className='bg-white rounded-full p-4'><ArrowLeft className='w-4 h-4 text-gray-700' /></span>
              </div>
              <p className='text-white'>مشاهده بیشتر</p>
            </div>
          </SwiperSlide>
        </Carousel>
      </div>

    </div>
  )
}

export default OfferBox;
