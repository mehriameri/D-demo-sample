import React from 'react';
import TitlesidebarDetail from '../TitleSidebarDetail';
import AddressBox from './AddressBox';

const AddressDetail = () => {
    return (
        <>
            <TitlesidebarDetail title='آدرس های من' />
            <AddressBox />
            <button type='button' className='flex mr-auto text-white bg-red-500 hover:bg-red-600 rounded-lg px-6 py-2 mt-4'>
                + افزودن آدرس جدید
            </button>
        </>
    )
}

export default AddressDetail;