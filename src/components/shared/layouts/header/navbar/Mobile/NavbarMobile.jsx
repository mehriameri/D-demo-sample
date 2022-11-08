import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import MenuMobile from '../../menu/Mobile/MenuMobile';
import NavbarMenuItem from '../../navbarMenu/NavbarMenuItem';
import CloseWithOnClickScreen from '../../../../../shared/logic/CloseWithOnClickScreen';
import InputSearch from '../searchBox/InputSearch';
import SearchDropDown from '../searchBox/SearchDropDown';
import UserAccountMenuMobile from './UserAccountMenuMobile';
import AuthBtn from '../authenticationButton/AuthBtn';
import EntranceBtn from '../authenticationButton/EntranceBtn';
import { Logo } from '../../../../../shared/UI/Logo';
import { ArrowLeftIcon, Bars3Icon, ShoppingBasketIcon } from '../../../../../shared/UI/Icons';
import { hasBackdrop } from '../../../../../../redux/backdrop/BackdropAction';
import { useEffect } from 'react';

const NavbarMobile = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [showUserAccountMenu, setShowUserAccountMenu] = useState(false);
    const isAuth = useSelector(state => state.userInfo);
    const totalBasketItem = useSelector(state => state.shoppingBasketInfo);
    const toggleDropDown = useSelector(state => state.toggleDropDown);
    const navigate = useNavigate();
    const MenuRef = useRef();
    const openUserAccountMenuHandler = () => {
        setShowUserAccountMenu(true);
    };
    useEffect(() => {
        document.body.style.overflow = openMenu ? 'hidden' : 'auto'
    }, [openMenu])
    return (
        <>
            <div className='bg-white z-30'>
                <div ref={MenuRef} >
                    <div className='flex justify-between align-middle border-b border-b-gray-200 py-3 px-4'>
                        <Bars3Icon className='cursor-pointer w-6 h-6' click={() => setOpenMenu(true)} />
                        <Logo className='w-24' />
                        <span className='border-2 border-gray-800 bg-white rounded-lg font-bold cursor-pointer px-2'> ? </span>
                    </div>
                    {openMenu && <MenuMobile />}
                </div>
                <div className='flex justify-between items-center text-xs font-semibold border-b border-b-gray-200 py-2 px-4'>
                    <div className='w-4/5'>
                        <div className='flex relative w-full'>
                            <InputSearch />
                            {toggleDropDown.dropDownState && <SearchDropDown />}
                        </div>
                    </div>
                    <div className='flex gap-4 items-center relative'>
                        {isAuth.user != null
                            ? <AuthBtn openUserAccountMenu={openUserAccountMenuHandler} />
                            : <EntranceBtn className='bg-white'
                                text={'ورود'}
                                click={() => navigate('/login')} />}
                        <div className='cursor-pointer' onClick={() => navigate('/checkout')}>
                            <ShoppingBasketIcon className="w-6 h-6 relative" />
                            {totalBasketItem.shoppingBasket.length > 0 && <span className='absolute top-5 left-3 bg-red-500 rounded-md text-white text-[10px] py-0.5 px-1.5'>{totalBasketItem.totalquantity}</span>}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center px-4'>
                    <NavbarMenuItem
                        text='لطفا شهر خود را انتخاب کنید'
                        icon="https://img.icons8.com/material-outlined/24/e9c527/marker.png"
                        classes='border-none hover:border-none'
                    />
                    <ArrowLeftIcon className='w-3 h-3' />
                </div>
                <CloseWithOnClickScreen
                    showModal={openMenu}
                    setShowModal={setOpenMenu}
                    modalRef={MenuRef}
                />
            </div>
            {showUserAccountMenu && <UserAccountMenuMobile setShowUserAccountMenu={setShowUserAccountMenu} />}
            <div className={`${openMenu ? 'bg-black opacity-40 fixed inset-0 z-10 ' : ''}`}></div>
        </>
    )
}

export default NavbarMobile;