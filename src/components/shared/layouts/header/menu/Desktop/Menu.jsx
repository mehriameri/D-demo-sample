import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import MainItemMenu from './MainItemMenu';
import SubItemMenuList from './SubItemMenuList';
import { ArrowLeftIcon } from '../../../../../shared/UI/Icons';
import useFetch from '../../../../../../hooks/useFetch';

const Menu = ({ setOpenMenu }) => {
    const { data: menuTitle } = useFetch({ url: "http://localhost:8000/megaMenuList" });
    const [activeSubMenu, setActiveSubMenu] = useState('100');
    const [titleActiveSubMenu, setTitleActiveSubMenu] = useState('همه کالاهای سوپرمارکتی');
    const navigate = useNavigate();
    return (
        <div className='flex border border-gray-300 shadow-lg bg-white rounded-b-xl absolute w-full z-20'
            onMouseEnter={() => { setOpenMenu(true) }}
            onMouseLeave={() => setOpenMenu(false)}
        >
            <div className='border-l border-gray-200'>
                <div className=''>
                    {menuTitle?.map((item, index) => <div key={index}>
                        <MainItemMenu menuList={item}
                            mouseOver={() => {
                                setActiveSubMenu(item.id);
                                setTitleActiveSubMenu(item.mainTitle);
                            }}
                            click={() => navigate(item.path)}
                        />
                    </div>)}
                </div>
            </div>
            <div className='text-sm px-4 my-4'>
                <div className='flex items-center text-gray-500 cursor-pointer hover:text-red-500 pb-4'>
                    <p className='py-1 text-[12px]'>{titleActiveSubMenu}</p>
                    <ArrowLeftIcon className='w-3 h-3' />
                </div>
                <SubItemMenuList activeId={activeSubMenu} />
            </div>
        </div>
    )
}

export default Menu;