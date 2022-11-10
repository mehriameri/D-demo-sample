import React from 'react';

function MoneyButton({text}) {
    return (
        <button type='button' className='flex flex-shrink-0 bg-gray-200 text-sm rounded-lg px-8 py-1.5'>
            {text}
        </button>
    )
}

export default MoneyButton;