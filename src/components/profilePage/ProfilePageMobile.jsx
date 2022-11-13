import React from 'react';
import { useParams } from 'react-router';
import MainLayout from '../shared/layouts/MainLayout';
import AddressDetail from './sidebarDetail/addressInformation/AddressDetail';
import DiscountsDetail from './sidebarDetail/discountsInformation/DiscountsDetail';
import MessageDetail from './sidebarDetail/messageinformation/MessageDetail';
import OrderDetail from './sidebarDetail/orderInformation/OrderDetail';
import AccountDetail from './sidebarDetail/personalInformation/AccountDetail';
import SupportDetail from './sidebarDetail/supportInformation/SupportDetail';
import WalletDetail from './sidebarDetail/walletInformation/WalletDetail';


function ProfilePageMobile() {
    const { profileId } = useParams();
    const detail = [
        { path: 'account', component: <AccountDetail /> },
        { path: 'shopping-history', component: <OrderDetail /> },
        { path: 'address', component: <AddressDetail /> },
        { path: 'wallet-management', component: <WalletDetail /> },
        { path: 'message', component: <MessageDetail /> },
        { path: 'discounts', component: <DiscountsDetail /> },
        { path: 'support', component: <SupportDetail /> },
    ]
    return (
        <MainLayout hasFooter={false}>
            <div className='bg-white'>
                <div className='border border-gray-200 bg-white rounded-xl shadow-lg p-4 m-4'>
                    {detail.map((item, index) => item.path === profileId && item.component)}
                </div>
            </div>
        </MainLayout>
    )
}

export default ProfilePageMobile;