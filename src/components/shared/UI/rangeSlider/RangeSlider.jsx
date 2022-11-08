import React, { useState } from 'react';

const RangeSlider = () => {
    const [price, setPrice] = useState(1000);
    const changeWidth = (event) => {
        setPrice(event.target.value);
    }
    return (
        <div className='w-full py-4'>
            <p className='text-sm py-3'>بیشترین قیمت: {price} تومان</p>
            <input
                className='w-full px-4'
                type='range'
                onChange={changeWidth}
                min={1000}
                max={80000}
                step={500}
                value={price}
            ></input>
            <div className='flex justify-between text-sm text-gray-500'>
                <p>ارزانترین</p>
                <p>گرانترین</p>
            </div>
        </div>
    )
}

export default RangeSlider
