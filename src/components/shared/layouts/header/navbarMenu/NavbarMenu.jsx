import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '../menu/Desktop/Menu';
import NavbarMenuItem from './NavbarMenuItem';
import navbarItem from '../../../../../data/jsonFiles/header/navbarItem.json';
import { hiddenDropDown } from '../../../../../redux/searchDropDown/DropDownIndex';

const NavbarMenu = () => {
  console.log('NavbarMenu-rendering')
  const dispatch = useDispatch()
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='relative border-b border-b-gray-300 w-full'>
      <div className='flex gap-3 mx-4 items-center bg-white'>
        <NavbarMenuItem
          icon="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          text='دسته‌بندی کالاها'
          textClasses='font-bold text-sm'
          mouseEnterr={() => {
            setOpenMenu(true);
            dispatch(hiddenDropDown())
          }}
          mouseLeave={() => {
            setOpenMenu(false);
            dispatch(hiddenDropDown())
          }}
        />
        <span className='text-xl text-gray-300 font-thin'>|</span>
        {navbarItem.map((item, index) => <NavbarMenuItem key={index} icon={item.icon} text={item.text} />)}
        <NavbarMenuItem
          icon="https://img.icons8.com/material-outlined/24/000000/marker.png"
          text='لطفا شهر خود را انتخاب کنید'
          classes='mr-auto hover:border-none'
        />
      </div>
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
    </div>
  )
}

export default NavbarMenu;