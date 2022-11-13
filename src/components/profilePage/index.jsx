import React from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import MainLayout from '../shared/layouts/MainLayout';
import PersonalInfo from './sidebar/PersonalInformation/PersonalInfo';
import Wallet from './sidebar/PersonalInformation/Wallet';
import AccountDetail from './sidebarDetail/personalInformation/AccountDetail';
import OrderDetail from './sidebarDetail/orderInformation/OrderDetail';
import AddressDetail from './sidebarDetail/addressInformation/AddressDetail';
import WalletDetail from './sidebarDetail/walletInformation/WalletDetail';
import MessageDetail from './sidebarDetail/messageinformation/MessageDetail';
import DiscountsDetail from './sidebarDetail/discountsInformation/DiscountsDetail';
import SupportDetail from './sidebarDetail/supportInformation/SupportDetail';
import useDeviceType from '../../hooks/useDeviceType';
import { ArrowLeftIcon } from '../shared/UI/Icons';
import dataList from '../../data/jsonFiles/profilePage/profileInfo.json'

const ProfilePage = () => {
  const { profileId } = useParams();
  const { isDesktop } = useDeviceType();
  const { pathname } = useLocation();
  const detail = [
    { path: 'account', component: <AccountDetail /> },
    { path: 'shopping-history', component: <OrderDetail /> },
    { path: 'address', component: <AddressDetail /> },
    { path: 'wallet-management', component: <WalletDetail /> },
    { path: 'message', component: <MessageDetail /> },
    { path: 'discounts', component: <DiscountsDetail /> },
    { path: 'support', component: <SupportDetail /> },
  ];

  return (
    <MainLayout hasFooter={false}>
      <div className="lg:grid lg:grid-cols-4 bg-white gap-4 px-10 my-5">
        <div className='flex flex-col col-span-1 gap-2'>
          <div className='bg-white rounded-lg border border-gray-200 shadow-md p-2'>
            <PersonalInfo />
            <Wallet />
          </div>
          <div className='bg-white rounded-lg border border-gray-200 shadow-md p-2'>
            {dataList.map((item, index) => <Link to={item.path} key={index}>
              <div className={`flex items-center rounded-xl border border-gray-100 bg-white active:bg-red-100 cursor-pointer px-1 ${pathname.includes(item.path) ? 'bg-red-100 border-red-100' : 'hover:bg-gray-100'}`} >
                <img src={item.icon} alt="" className='w-5 h-5' />
                < p className='mr-2 lg:py-6 py-4 text-sm ' >{item.name}</p>
                <ArrowLeftIcon className="h-4 w-4 mr-auto" />
              </div>
            </Link>)}
          </div>
        </div>
        {isDesktop && <div className='col-span-3 bg-white border border-gray-200 shadow-md rounded-lg p-4'>
          {detail.map((item, index) => item.path === profileId && item.component)}
        </div>}
      </div>
    </MainLayout >
  )
}

export default ProfilePage;
