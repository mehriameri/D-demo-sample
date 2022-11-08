import React from 'react';

const OfferBoxItem = ({ image, newPrice, oldPrice, off }) => {
    return (
        <div className='w-full flex flex-col items-center bg-white px-1 my-2 py-4'>
            <img src={image} alt={image} className='w-36 h-36' />
            <div className='w-full flex justify-between items-center text-xs px-1'>
                <span className='text-white text-[11px] bg-red-500 rounded-xl p-1'>{off}</span>
                <p className='flex flex-shrink-0 text-[11px] lg:text-[12px]'>{newPrice} تومان</p>
            </div>
            <p className='self-end text-[11px] text-gray-400 line-through text-left px-4'>{oldPrice}</p>
        </div>
    )
}

export default OfferBoxItem;