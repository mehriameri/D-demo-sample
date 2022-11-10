import React from 'react';

const EditDeleteBtn=({ openModal, icon })=> {
    return (
        <button
            onClick={openModal}
            type='button'
            className='rounded-lg px-4 py-2 mx-1 mt-4  hover:bg-gray-200'>
            {icon}
        </button>
    )
}

export default EditDeleteBtn;