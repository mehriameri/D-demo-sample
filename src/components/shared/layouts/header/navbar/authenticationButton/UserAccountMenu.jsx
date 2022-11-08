import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetLogin } from '../../../../../../redux/authentication/LoginIndex';
import { resetShoppingBasket } from '../../../../../../redux/shoppingInfo/ShoppingInfoIndex';
import UserAccountItem from './UserAccountItem';
import UserAccountMenuList from '../../../../../../data/jsonFiles/body/userAccountMenu.json';
import userImg from '../../../../../../assets/img/user.svg';

const UserAccountMenu = ({ setShowUserAccountMenu }) => {
    const userInfo = useSelector(state => state.userInfo);
    const isAuth = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const clickHandler = (title) => {
        if (title == 'خروج از حساب کاربری') {
            dispatch(resetShoppingBasket());
            dispatch(resetLogin());
        }
    }
    return (
        <div className='absolute left-0 border border-gray-100 bg-white rounded-lg shadow-md p-2 z-20'>
            {isAuth.user != null && <UserAccountItem title={userInfo.user.phoneNumber} icon={userImg} />}
            {UserAccountMenuList.map((item, index) => <UserAccountItem
                key={index}
                title={item.title}
                icon={item.icon}
                click={() => {
                    clickHandler(item.title)
                    setShowUserAccountMenu(false)
                }}
            />)}
        </div>
    )
}

export default UserAccountMenu;