import React, { useState, useEffect } from 'react';
import { TrashIcon, WatchIcon } from '../../../../../../shared/UI/Icons';
import SearchItemBox from './SearchItemBox';

const LastSearchItems = ({ setShowLastsearches, textvalue }) => {
  const [lastSearchItems, setLastsearchItems] = useState([]);
  useEffect(() => {
    setLastsearchItems(pre => [...pre, textvalue]);
  }, [textvalue])
  return (
    <>
      {lastSearchItems.length != 0 && <>
        <div className='py-2 my-2 overflow-x-auto'>
          <div className='flex gap-1 items-end '>
            <WatchIcon className='w-5 h-5 text-gray-600' />
            <p className='text-md font-bold text-gray-700'>آخرین جستجوی های شما</p>
            <TrashIcon
              className='mr-auto w-5 h-5 text-gray-600 cursor-pointer'
              click={() => setShowLastsearches(false)}
            />
          </div>
          <div className='flex gap-1 py-2'>
            {[...new Set(lastSearchItems)].map((item, index) => <SearchItemBox text={item} key={index} />)}
          </div>
        </div>
      </>}
    </>
  )
}

export default LastSearchItems;