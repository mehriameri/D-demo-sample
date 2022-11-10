import React from 'react';
import { HistoryIcon, WalletIcon } from '../../../shared/UI/Icons';
import TitleSidebarDetail from '../TitleSidebarDetail';
import MoneyButton from './MoneyButton';

const WalletDetail = () => {
    return (
        <>
            <TitleSidebarDetail title='کیف پول' />
            <div className='flex justify-between bg-red-50 rounded-lg px-4 py-10'>
                <div>
                    <div className='flex '>
                        <WalletIcon className=" text-red-400 h-8 w-8" />
                        <h6 className='pr-2'>موجودی کیف من</h6>
                    </div>
                    <span className='px-14 text-xs' >0 ریال</span>
                </div>

                <button type='button' className='items-center bg-red-600 rounded-lg text-white mr-auto hover:bg-red-700 px-8 py-0'>
                    برداشت از کیف پول
                </button>
            </div>
            <div className='flex justify-between pr-4 mt-16 '>
                <div className='w-2/5 ml-2'>
                    <h6 className='font-bold mb-2'>شارژ کیف پول</h6>
                    <p className='text-sm'>میلغ مورد نیاز خود را وارد نمایید یا از میان مبالغ پیشنهادی یک گزینه انتخاب نمایید</p>
                </div>
                <div className='flex flex-col w-3/5'>
                    <input type="text" className='outline-none border border-gray-300 rounded-md align-middle p-4' placeholder='مبلغ دلخواه شما (ریال)' />
                    <div className='flex gap-2 py-4 w-full'>
                        <MoneyButton text='50,000 ریال' />
                        <MoneyButton text='100,000 ریال' />
                        <MoneyButton text='200,000 ریال' />
                    </div>
                </div>
            </div>
            <div className='flex text-red-600 items-center mt-6 pr-2 '>
                <HistoryIcon className="h-6 w-6" />
                <button type='button' className='hover:bg-gray-100 rounded-md text-sm p-2 '>تاریخچه تراکنش ها</button>
            </div>
            <div className='flex justify-end items-center mt-12 text-sm'>
                <p>مبلغ قابل پرداخت:    0 ریال</p>
                <button type='button' className='bg-red-400 rounded-lg text-white px-6 py-2 mr-3'> شارژ کیف پول </button>
            </div>
        </>

    )
}

export default WalletDetail;