import React from 'react';
import categoryList from '../../../data/jsonFiles/header/category.json';

const Category = () => {
    console.log('Category-rendering')
    return (
        <>
            <p className='text-center font-bold text-xl my-10'>دسته‌بندی‌های دیجی‌کالا</p>
            <div className='w-full grid grid-cols-3 lg:grid-cols-6 gap-6 my-8 px-6'>
                {categoryList.map((item, index) =>
                    <div key={item} className='w-full flex flex-col items-center justify-start'>
                        <img src={item.img} alt={item.img} className='lg:w-36 w-28' />
                        <p className='text-[10px] lg:text-xs text-center font-semibold p-2'>{item.title}</p>
                    </div>
                )}
            </div>
        </>

    )
}

export default Category;
