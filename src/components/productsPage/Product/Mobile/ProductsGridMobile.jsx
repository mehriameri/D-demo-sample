import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../../../hooks/useFetch';
import sortTypeList from '../../../../data/jsonFiles/productsPage/sortType.json';
import { AdjustmentsBarIcon, CheckIcon, FilterBarIcon, XmarkIcon } from '../../../shared/UI/Icons';
import ProductCard from '../ProductCard';
import FilterMenu from '../../filter/FilterMenu';
import useDeviceType from '../../../../hooks/useDeviceType';

const ProductsGridMobile = () => {
    const [showSortMenu, setShowSortMenu] = useState(false);
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [sortName, setSortName] = useState('پربازدیدترین');
    const { isMobile } = useDeviceType();
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const sortType = searchParams.get('sort');
    const { data: productsInfo } = useFetch({
        url: `http://localhost:8000/products?${id ? `category=${id}` : ''}${sortType ? `&_sort=${sortType}&_order=DESC` : ''}`
        , dependency: [sortType, id]
    });
    const sortHandler = (title, sortBy) => {
        setShowSortMenu(false);
        setSortName(title);
        setSearchParams({
            sort: sortBy
        })
    }
    // useEffect(() => {
    //     document.body.style.overflow = (showSortMenu || showFilterMenu) ? 'hidden' : 'visible'
    // }, [showSortMenu, showFilterMenu])

    return (
        <>
            <div className='flex gap-5 py-4'>
                <div className='flex gap-2 cursor-pointer items-center' onClick={() => setShowFilterMenu(true)}>
                    <AdjustmentsBarIcon className='w-6 h-6' />
                    <p className='font-semibold '>فیلتر</p>
                </div>
                <div className='flex gap-2 cursor-pointer items-end' onClick={() => setShowSortMenu(true)}>
                    <FilterBarIcon className='w-6 h-6' />
                    <p className='font-semibold '>{sortName}</p>
                </div>
            </div>
            <div className='fixed bottom-0 left-0 bg-white border border-gray-300 rounded-t-xl px-4 pt-4 z-50 w-full' >
                {showSortMenu && <>
                    <div className='flex gap-2 font-bold text-md items-center cursor-pointer overflow-y-scroll py-2' onClick={() => setShowSortMenu(false)}>
                        <XmarkIcon className='w-4 h-4' />
                        <p>مرتب‌سازی بر اساس</p>
                    </div>
                    {sortTypeList.map((item, index) => <div key={index}
                        className='flex justify-between items-center border-b border-gray-200 text-gray-500 cursor-pointer p-4'
                        onClick={() => sortHandler(item.title, item.sortBy)}
                    >
                        <p>{item.title}</p>
                        {item.title === sortName && <CheckIcon className='w-5 h-5' />}
                    </div>)}
                </>}
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-flow-row'>
                {productsInfo?.map((item, index) => <ProductCard key={index} dataList={item} />)}
            </div>
            {isMobile && showFilterMenu &&
                <FilterMenu closeFilterModal={() => setShowFilterMenu(false)} />
            }
            <div className={`${showSortMenu ? 'bg-black opacity-40 fixed inset-0 z-10' : ''}`}></div>
        </>
    )
}

export default ProductsGridMobile;