import React, { useState } from 'react';
import { ArrowBottomIcon, ArrowLeftIcon, ArrowTopIcon } from '../../../../../shared/UI/Icons';

const SubMenuMobileItem = ({ dataList }) => {
    const [subMenuId, setSubMenuId] = useState();
    const showSubMenuHandler = (selectedId) => {
        setSubMenuId(selectedId);
    }
    return (
        <div className='text-xs bg-gray-200 cursor-pointer pr-6 pl-2'>
            <div className='flex items-center gap-2 py-4'>
                <p className='text-xs font-bold text-gray-500'>همه موارد این دسته</p>
                <ArrowLeftIcon className='w-3 h-3 text-gray-500' />
            </div>
            {dataList.subMenu.map((item, index) => {
                return (
                    <div key={index} >
                        <div className='flex items-center text-xs bg-gray-200 cursor-pointer py-4'
                            onClick={() => showSubMenuHandler(item.id)}>
                            <p className='text-sm active:text-red-500'>{item.title}</p>
                            {item.data.length > 0 && <ArrowBottomIcon className='w-4 h-4 mr-auto' />}
                        </div>
                        {item.id === subMenuId && item.data.length > 0 &&
                            <div className='text-xs px-4 border-b border-gray-300'>
                                <div className='flex items-center gap-2'>
                                    <p className='font-semibold text-gray-500'>همه موارد این دسته</p>
                                    <ArrowLeftIcon className='w-2 h-2 text-gray-500' />
                                </div>
                                {item.data.map((item, index) =>
                                    <div key={index} className='flex items-center text-xs bg-gray-200 cursor-pointer py-4'>
                                        <p className='hover:text-red-400'>{item}</p>
                                    </div>)}
                            </div>}
                    </div>
                )
            }
            )}
        </div>
    )
}

export default SubMenuMobileItem;
