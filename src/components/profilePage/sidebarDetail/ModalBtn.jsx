import React from 'react';

function ModalBtn({closeModalBox,cancelBtn,successBtn}) {
    return (
        <div className='flex justify-end'>
            <button
                onClick={closeModalBox}
                type='button'
                className='border-2 hover:bg-gray-100 focus:bg-red-200 focus:border-red-200 text-red-600 font-semibold rounded-lg px-4 py-2 ml-2'>
                {cancelBtn}
            </button>

            <button
                type='button'
                className='bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2 '>
                {successBtn}
            </button>
        </div>
    )
}
export default ModalBtn;