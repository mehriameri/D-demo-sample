import React from 'react';

function EmptyItem({ img, message, extraMessage }) {
    return (
        <div className='my-8'>
            <img src={img} alt="empty Item" className=' mx-auto w-80' />
            <p className=' text-center py-4'>{message}</p>
            <p className='text-center text-gray-500 text-sm mt-0'>{extraMessage}</p>
        </div>
    )
}

export default EmptyItem;