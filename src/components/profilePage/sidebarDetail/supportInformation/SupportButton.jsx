import React from 'react';

function SupportButton({ clicked, title }) {
    return (
        <button type='button' className='flex items-center text-sm  border-red-600 px-10 py-3 focus:text-red-600 focus:border-b-2 active:bg-red-200'
            onClick={clicked}>
            {title}
        </button>
    )
}

export default SupportButton;