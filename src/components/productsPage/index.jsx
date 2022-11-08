import React from 'react';
import ProductAdvertisementCard from './Product/ProductAdvertisementCard';
import FilterMenu from './filter/FilterMenu';
import useDeviceType from '../../hooks/useDeviceType';
import MainLayout from '../shared/layouts/MainLayout';
import ProductCategory from './productCategory/ProductCategory';
import ProductsGrid from './Product/Desktop/ProductsGrid';
import ProductsGridMobile from './Product/Mobile/ProductsGridMobile';

const ProductPage = () => {
  const { isDesktop } = useDeviceType();
  
  return (
    <MainLayout>
      <div className='p-4 bg-white'>
        <p className='text-gray-500 text-xs'> فروشگاه اینترنتی دیجی‌کالا /</p>
        <ProductCategory />
        <div className='flex gap-4 w-full py-4'>
          {isDesktop && <div className='flex flex-col gap-4 xl:w-1/4 lg:w-1/3'>
            <ProductAdvertisementCard />
            <FilterMenu classes='sticky top-0 border border-gray-200' />
          </div>}
          <div className='py-2 w-full'>
            {isDesktop
              ? <ProductsGrid />
              : <ProductsGridMobile />}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductPage;