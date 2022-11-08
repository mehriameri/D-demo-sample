import React, { useContext } from 'react';
import { ArrowLeftIcon } from '../../../../../../shared/UI/Icons';
import { SearchValueContext } from '../SearchDropDown';

const SearchItemBox = ({ text, setShowLastsearches }) => {
    const searchValueContext = useContext(SearchValueContext);
    return (
        <div className='flex flex-shrink-0 items-center bg-white border border-gray-300 rounded-3xl cursor-pointer p-2'
            onClick={() => {
                searchValueContext.setSearchItemBoxText(text);
                setShowLastsearches(true);
            }}
        >
            <p className='px-2 text-sm'>{text}</p>
            <ArrowLeftIcon className='w-3 h-3' />
        </div>
    )
}
export default SearchItemBox;