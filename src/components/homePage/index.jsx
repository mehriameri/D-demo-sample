import React from 'react';
import Slider from './slider/Slider';
import DigiPart from './optionParts/DigiPart'
import OfferBox from './offerBox/OfferBox';
import OfferSupermarket from './offerSupermarket/OfferSupermarket';
import Category from './categoriesDigiKala/Category';
import DigikalaOffer from './digikalaOffer/DigikalaOffer';
import Brands from './popularBrands/Brands';
import Advertisement from './advertisementParts/Advertisement';
import MainLayout from '../shared/layouts/MainLayout';
import AdvertisementList1 from '../../data/jsonFiles/advertisement/advertisementList1.json';
import AdvertisementList2 from '../../data/jsonFiles/advertisement/advertisementList2.json';
import AdvertisementList3 from '../../data/jsonFiles/advertisement/advertisementList3.json';

const HomePage = () => {
    return (
        <MainLayout>
            <div className='bg-white'>
                <Slider />
                <DigiPart />
                <div className='w-full flex flex-col items-center lg:px-20 gap-2'>
                    <OfferBox />
                </div>
                <div className='w-full flex flex-col items-center px-6 lg:px-20 gap-2'>
                    <OfferSupermarket />
                    <Advertisement list={AdvertisementList1} />
                    <Category />
                    <Advertisement list={AdvertisementList2} />
                    <DigikalaOffer />
                    <Brands />
                    <Advertisement list={AdvertisementList3} />ّ
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage;