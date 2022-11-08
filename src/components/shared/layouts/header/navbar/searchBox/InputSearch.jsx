import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchIcon } from '../../../../../shared/UI/Icons';
import { showDropDown } from '../../../../../../redux/searchDropDown/DropDownIndex';

const InputSearch = ({ classes }) => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  return (
    <div className='flex justify-start items-center w-full'>
      <SearchIcon className='absolute text-gray-500 mr-4 w-5 h-5' />
      <input
        type='text'
        className={`bg-gray-200 rounded-lg border-2 text-xs outline-none w-full px-10 py-3 ${classes}`}
        placeholder='جستجو'
        onClick={() => dispatch(showDropDown())}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  )
}

export default InputSearch;