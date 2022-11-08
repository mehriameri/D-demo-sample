import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const ProductCategory = () => {
    const { data: categoryInfo } = useFetch({ url: "http://localhost:8000/categoryList" });
    return (
        <div>
            <p className='font-bold py-4'>دسته‌بندی‌ها</p>
            <div className='flex gap-2 overflow-x-auto'>
                {categoryInfo?.map((item, index) =>
                    <Link to={'/product/' + item.title} key={index} className='flex flex-col flex-shrink-0'>
                        <div className=' border border-gray-200 bg-white rounded-lg cursor-pointer px-6 pt-2'>
                            <img src={item.img} alt="" className='w-20 h-20' />
                            <p className='text-center text-xs text-gray-500 pt-2 pb-10'>{item.title}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div >
    )
}

export default ProductCategory;