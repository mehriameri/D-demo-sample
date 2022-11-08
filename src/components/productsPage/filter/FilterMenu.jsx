import React, { useEffect, useState } from 'react';
import useDeviceType from '../../../hooks/useDeviceType';
import useFetch from '../../../hooks/useFetch';
import { XmarkIcon } from '../../shared/UI/Icons';
import FilterMenuItem from './FilterMenuItem';

const FilterMenu = ({ closeFilterModal, classes }) => {
    const { isMobile } = useDeviceType();
    const { data: filterItem } = useFetch({ url: "http://localhost:8000/filterTitle" });

    return (
        <div className={`fixed top-0 lg:border-gray-200 bg-white lg:rounded-lg pb-10 px-4 w-full overflow-y-scroll ${classes}`}>
            <div className='flex items-center py-6 pr-4 lg:pr-0'>
                <div className='cursor-pointer' onClick={closeFilterModal}>
                    {isMobile && <XmarkIcon className='w-5 h-5' />}
                </div>
                <p className='font-bold text-lg pr-2 lg:pr-0'>فیلترها</p>
            </div>
            <div >
                {filterItem?.map((item, index) => <FilterMenuItem key={index} dataList={item} idBtn={index} />)}
            </div>
        </div>
    )
}

export default FilterMenu;