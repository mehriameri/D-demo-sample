import React, { useState } from 'react';
import { ArrowBottomIcon, ArrowTopIcon } from '../../../../../shared/UI/Icons';
import useFetch from '../../../../../../hooks/useFetch';
import SubMenuMobileItem from './SubMenuMobileItem';

const MenuMobileItem = ({ dataList }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [subMenuId, setSubMenuId] = useState('');
    const { data: subMenuItem } = useFetch({ url: `http://localhost:8000/megaMenuList?id=${subMenuId}`, dependency: [subMenuId] });
    const showSubMenuHandler = () => {
        setShowSubMenu(!showSubMenu);
        setSubMenuId(dataList.id);
    }
    return (
        <>
            <div className='flex items-center text-xs cursor-pointer py-4 px-2 active:text-red-500' onClick={showSubMenuHandler}>
                <img src={dataList.icon} alt="" className='w-5 h-5' />
                <p className='text-sm px-2'>{dataList.title}</p>
                {showSubMenu
                    ? <ArrowTopIcon className='w-4 h-4 mr-auto font-bold text-red-600' />
                    : <ArrowBottomIcon className='w-4 h-4 mr-auto' />}
            </div>
            {showSubMenu && subMenuItem?.map((item, index) => <SubMenuMobileItem key={index} dataList={item} />)}
        </>
    )
}

export default MenuMobileItem;