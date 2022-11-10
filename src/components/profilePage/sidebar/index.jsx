import React from 'react';
import MainLayout from '../../shared/layouts/MainLayout';
import PersonalInfo from './PersonalInformation/PersonalInfo';
import Wallet from './PersonalInformation/Wallet';
import ListItems from './sidebarList/ListItems';
import AccountDetail from '../sidebarDetail/personalInformation/AccountDetail';
import { useParams } from 'react-router';
import OrderDetail from '../sidebarDetail/orderInformation/OrderDetail';
import AddressDetail from '../sidebarDetail/addressInformation/AddressDetail';
import WalletDetail from '../sidebarDetail/walletInformation/WalletDetail';
import MessageDetail from '../sidebarDetail/messageinformation/MessageDetail';
import DiscountsDetail from '../sidebarDetail/discountsInformation/DiscountsDetail';
import SupportDetail from '../sidebarDetail/supportInformation/SupportDetail';

const ProfilePage = () => {
  const { profileDetail } = useParams();
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
      <div className="flex gap-4 mx-10 my-5">
        <div className='flex flex-col gap-2'>
          <div className='bg-white rounded-lg border border-gray-200 shadow-md p-2'>
            <PersonalInfo />
            <Wallet />
          </div>
          <ListItems />
        </div>
        <div className='flex-grow bg-white border border-gray-200 shadow-md rounded-lg p-4'>
          {detail.map((item, index) => item.path === profileDetail && item.component)}
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfilePage;
