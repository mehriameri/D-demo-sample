import React from 'react'

function CustomInput({ label, type, placeholder = '' }) {
    return (
        <div className='grow relative mt-10 ml-4' >
            <label className='absolute right-3 bottom-11 bg-white text-sm font-thin text-gray-500 px-2'>{label}</label>
            <input
                className='outline-none border rounded-lg focus:border-gray-400 p-3 w-full'
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default CustomInput;