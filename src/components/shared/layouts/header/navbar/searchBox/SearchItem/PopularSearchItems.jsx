import React from 'react';
import SearchItemBox from './SearchItemBox';
import popularSearch from '../../../../../../../data/jsonFiles/body/popularSearch.json';
import { PopularIcon } from '../../../../../../shared/UI/Icons';

const PopularSearchItems = ({ setShowLastsearches }) => {
    return (
        <div className='py-2 my-2 overflow-x-auto'>
            <div className='flex gap-1 items-end'>
                <PopularIcon className='w-5 h-5 text-gray-600 ' />
                <p className='text-md font-bold text-gray-700'>جستجوهای پرطرفدار</p>
            </div>
            <div className='flex gap-1 py-2'>
                {popularSearch.map((item, index) =>
                    <SearchItemBox key={index} text={item} setShowLastsearches={setShowLastsearches} />
                )}
            </div>
        </div>
    )
}

export default PopularSearchItems;