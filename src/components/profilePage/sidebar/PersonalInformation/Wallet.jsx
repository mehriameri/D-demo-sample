import React from 'react';
import { useNavigate } from 'react-router';
import { WalletIcon } from '../../../shared/UI/Icons';

const Wallet = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center cursor-pointer m-2 my-4' onClick={() => navigate('/profile/wallet-management')}>
      <WalletIcon className=" text-gray-400 h-6 w-6 " />
      <p className='mr-2 text-sm'>موجودی کیف پول</p>
      <p className='text-xs mr-auto'>0 ریال</p>
    </div>
  )
}

export default Wallet;
