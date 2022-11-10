import React from 'react';

function OrderButton({ onClick, title, isActive }) {
    return (
        <button className={`flex items-center text-sm border-red-600 active:bg-red-200 px-10 py-3 ${isActive ? 'border-b-2' : ''}`}
            type='button'
            onClick={onClick}
        >
            {title}
            <span className="flex justify-center items-center rounded-full text-xs text-white bg-red-400 mr-2 w-5 h-5">0</span>
        </button>
    )
}

export default OrderButton;
