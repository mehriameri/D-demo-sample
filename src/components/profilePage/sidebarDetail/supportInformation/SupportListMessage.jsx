import React from 'react';
import { PhoneIcon } from '../../../shared/UI/Icons';

function SupportListMessage() {
  return (
    <div className='flex bg-red-500 text-white text-sm font-bold rounded-lg px-4 py-6 my-4'>
      <div >
        <div className='flex'>
          <PhoneIcon className="h-5 w-5" />
          <h6>مرکز تماس امور مشتریان</h6>
        </div>
        <h6 className='pr-6'>1536</h6>
      </div>
      <div className='mr-auto text-left'>
        <p >همه روزه</p>
        <p>ساعت 8 تا 22</p>
      </div>
    </div>
  )
}

export default SupportListMessage;