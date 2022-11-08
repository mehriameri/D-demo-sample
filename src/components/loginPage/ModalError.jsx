import React from 'react';

const ModalError = () => {
    return (
        <div className='flex'>
            <div className='bg-black text-white text-center text-sm rounded-xl mx-auto mt-2 p-6'>
                <p className=' '>کد وارد شده اشتباه است</p>
                <p>لطفا  پسورد 12345 را وارد کنید</p>
            </div>
        </div>
    )
}

export default ModalError;