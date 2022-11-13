import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { ArrowLeftIcon, UserIcon } from '../../../shared/UI/Icons';

const PersonalInfo = () => {
  const isAuth = useSelector(state => state.userInfo);
  const navigate = useNavigate();
  return (
    <div className='flex gap-2 items-center rounded-lg bg-red-500 cursor-pointer lg:h-20 h-12 p-2' onClick={() => navigate('/profile/account')}>
      <UserIcon className='text-white lg:w-8 lg:h-8 w-4 h-4' />
      <p className='font-semibold lg:text-xl text-md text-white pl-12'>{isAuth.user.phoneNumber}</p>
      <ArrowLeftIcon className="text-white h-4 w-4 mr-auto ml-2 transition duration-500 transform hover:-translate-x-1" />
      <Outlet />
    </div>

  )
}
export default PersonalInfo;