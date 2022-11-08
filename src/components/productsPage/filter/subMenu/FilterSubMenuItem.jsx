import React, { useState, useEffect } from 'react';
import { ArrowBottomIcon } from '../../../shared/UI/Icons';

const FilterSubMenuItem = ({ dataList }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [filterItem, setFilterItem] = useState([]);
    const [subMenuId, setSubMenuId] = useState(0);
    const showSubMenuHandler = (nomber) => {
        setShowSubMenu(!showSubMenu);
        setSubMenuId(nomber);
    }
    useEffect(() => {
        console.log(dataList.data[0])
        const filters = dataList.data.map((item, index) => <FilterSubMenuItem key={index} dataList={item} />)
        setFilterItem(filters);
    }, [showSubMenu]);
    return (
        <div className='mr-4' >
            {dataList.data.map((item, index) =>
                <div key={index} className='flex gap-4 items-end border-b border-gray-200 cursor-pointer py-4 mr-4'
                    onClick={() => showSubMenuHandler(item.id)}>
                    <ArrowBottomIcon className='w-3 h-3 text-gray-600' />
                    <p className='text-xs font-semibold'>{item.title}</p>
                </div>)}
            {showSubMenu && filterItem[subMenuId]}
        </div>
    )
}

export default FilterSubMenuItem;