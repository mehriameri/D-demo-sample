import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetLogin } from '../../../../../../redux/authentication/LoginIndex';
import { resetShoppingBasket } from '../../../../../../redux/shoppingInfo/ShoppingInfoIndex';
import UserAccountItem from './UserAccountItem';
import UserAccountMenuList from '../../../../../../data/jsonFiles/body/userAccountMenu.json';
import userImg from '../../../../../../assets/img/user.svg';
import { useNavigate } from 'react-router';

const UserAccountMenu = ({ setShowUserAccountMenu }) => {
    const userInfo = useSelector(state => state.userInfo);
    const isAuth = useSelector(state => state.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clickHandler = (title) => {
        setShowUserAccountMenu(false);
        navigate('/profile/account');
        if (title == 'خروج از حساب کاربری') {
            dispatch(resetShoppingBasket());
            dispatch(resetLogin());
            navigate('/')
        }
    }
    return (
        <div className='absolute left-0 border border-gray-100 bg-white rounded-lg shadow-md p-2 z-20'>
            {isAuth.user != null && <UserAccountItem title={userInfo.user.phoneNumber} icon={userImg} click={() => navigate('/profile/account')} />}
            {UserAccountMenuList.map((item, index) => <UserAccountItem
                key={index}
                title={item.title}
                icon={item.icon}
                click={() => clickHandler(item.title)}
            />)}
        </div>
    )
}

export default UserAccountMenu;