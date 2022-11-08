import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { FilterBarIcon } from '../../../shared/UI/Icons';
import sortTypeList from '../../../../data/jsonFiles/productsPage/sortType.json';
import useFetch from '../../../../hooks/useFetch';
import ProductCard from '../ProductCard';

const ProductsGrid = () => {
    const { id } = useParams();
    const [sortName, setSortName] = useState('پربازدیدترین');
    const [searchParams, setSearchParams] = useSearchParams();
    const sortType = searchParams.get('sort')
    const { data: productsInfo } = useFetch({
        url: `http://localhost:8000/products?${id ? `category=${id}` : ''}${sortType ? `&_sort=${sortType}&_order=DESC` : ''}`
        , dependency: [sortType, id]
    });
    const sortHandler = (sortBy, title) => {
        setSortName(title);
        setSearchParams({
            sort: sortBy
        })
    }
    return (
        <>
            <div className='flex gap-4 py-2'>
                <div className='flex gap-2'>
                    <FilterBarIcon className='w-6 h-6' />
                    <p className='text-sm text-gray-800 font-semibold'>مرتب‌سازی:</p>
                </div>
                {sortTypeList.map((item, index) => <div key={index} onClick={() => sortHandler(item.sortBy, item.title)}>
                    <p className={`text-sm text-gray-500 cursor-pointer ${item.title === sortName ? 'text-red-500' : ''}`}>{item.title}</p>
                </div>
                )}
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-flow-row'>
                {productsInfo?.map((item, index) => <ProductCard key={index} dataList={item} />)}
            </div>
        </>
    )
}

export default ProductsGrid;