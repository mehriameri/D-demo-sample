import React from 'react';
import ModalBtn from '../../ModalBtn';

function DeleteAddressDetail({ closeModal }) {
    return (
        <div className='bg-white rounded-2xl p-4 w-full'>
            <h1 className='font-bold text-xl mb-4'>حذف آدرس</h1>
            <p className='mb-6'>آیا از حذف آدرس خود مطمئن هستید؟</p>
            <ModalBtn cancelBtn='انصراف' successBtn='بله، حذف کن' closeModalBox={closeModal} />
        </div>
    )
}

export default DeleteAddressDetail;