import React from 'react';

const OfferSupermarketItem = ({img,offPercent}) => {
    return (
        <div className='flex flex-shrink-0 relative'>
            <span className='bg-white rounded-full p-3.5'>
                <img src={img} alt="" className='w-10 h-10' />
            </span>
            <div>
                <span className='absolute top-14 left-8 rounded-full bg-red-500 text-[10px] text-white font-semibold py-0.5 px-2'>
                    {offPercent}
                </span>
            </div>
        </div>
    )
}

export default OfferSupermarketItem;
