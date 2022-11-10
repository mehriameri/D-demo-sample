import React from 'react';
import TitlesidebarDetail from '../TitleSidebarDetail';
import AddressBox from './AddressBox';

const AddressDetail = () => {
    return (
            <div className='bg-opacity-30'>
                <TitlesidebarDetail title='آدرس های من' />
                <div>
                    <AddressBox />
                    <AddressBox />
                </div>
                <button type='button' className='flex mr-auto text-white bg-red-500 hover:bg-red-600 rounded-lg  font-bold px-6 py-2 mt-4 '>
                    + افزودن آدرس جدید
                </button>
            </div>
    )
}

export default AddressDetail;