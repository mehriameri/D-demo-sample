import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// import { AddressIcon, ContactIcon, LogoutIcon, MessageIcon, OrderIcon ,DiscountCodeIcon} from '../../../UI/Icons';

import ListItem from './ListItem';

function ListItems() {
    const { pathname } = useLocation();
    const listInfo = {
        order: {
            name: 'سفارش های من',
            // icon:< OrderIcon className=" text-red-400 h-6 w-6"/>,
            path: 'shopping-history',
        },
        address: {
            name: 'آدرس های من',
            // icon:<AddressIcon className="text-red-400 h-6 w-6"/> ,
            path: 'address',
        },
        message: {
            name: 'پیام های من',
            // icon:<MessageIcon className="text-red-400 h-6 w-6"/> ,
            path: 'message',
        },
        discountCode: {
            name: 'کدهای تخفیف من',
            // icon:<DiscountCodeIcon className="text-red-400 h-6 w-6"/> ,
            path: 'discounts',
        },
        contact: {
            name: 'تماس با پشتیبانی',
            // icon:<ContactIcon className="text-red-400 h-6 w-6"/> ,
            path: 'support',
        },
        signout: {
            name: 'خروج از حساب',
            // icon:<LogoutIcon className="text-red-600 h-6 w-6"/> ,
            path: 'logout',
        }
    };

    const listInfoArray = Object.values(listInfo);

    return (
        <div className='bg-white border border-gray-200 shadow-md rounded-lg p-2'>
            <ul>
                {listInfoArray.map((item, index) => <Link to={'/profile/' + item.path} key={index}>
                    <ListItem
                        id={item.path}
                        text={item.name}
                        // icon={item.icon}
                        isActive={pathname.includes(item.path)}
                    />
                </Link>
                )}
            </ul>
        </div>
    )
}

export default ListItems;