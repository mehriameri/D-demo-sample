import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import UserAccountMenuList from '../../../../../../data/jsonFiles/header/useAccountMenuMobile.json';
import userImg from '../../../../../../assets/img/user.svg';
import UserAccountItem from '../authenticationButton/UserAccountItem';
import { resetLogin } from '../../../../../../redux/authentication/LoginIndex';
import { resetShoppingBasket } from '../../../../../../redux/shoppingInfo/ShoppingInfoIndex';
import { ArrowLeftIcon, XmarkIcon } from '../../../../../shared/UI/Icons';

const UserAccountMenuMobile = ({ setShowUserAccountMenu, click }) => {
    const userInfo = useSelector(state => state.userInfo);
    const isAuth = useSelector(state => state.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickHandler = (title) => {
        setShowUserAccountMenu(false)
        navigate('/profile')
        if (title == 'خروج') {
            dispatch(resetShoppingBasket());
            dispatch(resetLogin());
            navigate('/')
        }
    }
    return (
        <div className='bg-white w-full h-full fixed top-0 p-2 z-30'>
            <div className='flex gap-4 items-end p-4' >
                <div onClick={() => setShowUserAccountMenu(false)}>
                    <XmarkIcon className='w-7 h-7 cursor-pointer' />
                </div>
                <p className='text-xl font-bold'>پروفایل</p>
            </div>
            {isAuth.user != null && <div className='flex justify-between items-center w-full border-b border-gray-200 py-2' onClick={()=>navigate('/profile')}>
                <UserAccountItem title={userInfo.user.phoneNumber} icon={userImg} classes='border-none' />
                <ArrowLeftIcon className='w-4 h-4 text-gray-600' />
            </div>}
            {UserAccountMenuList.map((item, index) =>
                <div key={index} className='flex justify-between items-center w-full border-b border-gray-200 py-1' >
                    <UserAccountItem
                        title={item.title}
                        icon={item.icon}
                        classes='border-none'
                        click={() => clickHandler(item.title)}
                    />
                    <ArrowLeftIcon className='w-4 h-4 text-gray-500' />
                </div>
            )}
        </div>
    )
}

export default UserAccountMenuMobile;