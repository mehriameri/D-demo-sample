import React from 'react';

function EditGenderBtn({ icon, gender }) {
    return (
        <div className='flex ml-1 grow'>
            <button type='button' className='flex justify-center items-center text-sm bg-gray-200 border rounded-xl focus:border-red-600 focus:bg-red-100 focus:text-red-600 py-3 mt-4 w-full'>
                {icon}
                <span className='mr-2'>{gender}</span>
            </button>
        </div>
    )
}

export default EditGenderBtn;