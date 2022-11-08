import React from 'react';
import SupermarketBasket from '../../../assets/img/offerSupermarket/fresh.png';
import SupermarketText from '../../../assets/img/offerSupermarket/fresh.svg';
import OfferSupermarketList from '../../../data/jsonFiles/body/offerSupermarketList.json';
import OfferSupermarketItem from './OfferSupermarketItem';
import useDeviceType from '../../../hooks/useDeviceType';
import { ArrowLeft } from '../../shared/UI/Icons';

const OfferSupermarket = () => {
    console.log('OfferSupermarket-rendering')
    const { isMobile } = useDeviceType();
    let offerSupermarketList = OfferSupermarketList;
    if (isMobile) { offerSupermarketList = OfferSupermarketList.slice(0, 3); }
    return (
        <div className='w-full lg:flex bg-gray-200 rounded-xl px-8 py-4'>
            <div className='flex gap-4 w-1/2'>
                <div className='flex gap-2'>
                    <img src={SupermarketBasket} alt="SupermarketBasket" className='lg:w-16 w-12' />
                    <img src={SupermarketText} alt="SupermarketText" className='lg:w-72 w-42' />
                </div>
                <div className='my-auto'>
                    <span className='bg-[#3daa16] rounded-full text-white text-sm px-2 py-1 invisible xl:visible'>
                        تا 41% تخفیف
                    </span>
                </div>
            </div>
            <div className='flex lg:w-1/2'>
                <div className='flex gap-2 w-2/3 overflow-hidden py-2'>
                    {offerSupermarketList.map((item, index) => <OfferSupermarketItem key={index} offPercent={item.offPercent} img={item.img} />)}
                </div>
                <div className='flex my-auto mr-auto'>
                    <span className='flex flex-shrink-0 gap-2 items-center text-[#3daa16] rounded-full bg-white text-sm font-semibold lg:p-4 p-2'>
                        <p className='text-[0] lg:text-xs'>بیش از 90 کالا</p>
                        <ArrowLeft className='w-3 h-3' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OfferSupermarket;