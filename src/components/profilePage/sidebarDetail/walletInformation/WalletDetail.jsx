import React from 'react';
import { HistoryIcon, WalletIcon } from '../../../shared/UI/Icons';
import TitleSidebarDetail from '../TitleSidebarDetail';

const WalletDetail = () => {
    const moneyButton = ['50,000', '100,000', '200,000'];
    return (
        <>
            <TitleSidebarDetail title='کیف پول' />
            <div className='flex justify-between bg-red-50 rounded-lg px-4 py-10'>
                <div>
                    <div className='flex gap-2'>
                        <WalletIcon className=" text-red-400 h-8 w-8" />
                        <p >موجودی کیف من</p>
                    </div>
                    <span className='px-14 text-xs' >0 ریال</span>
                </div>
                <button type='button' className='items-center bg-red-600 rounded-lg text-white mr-auto hover:bg-red-700 px-8'>
                    برداشت از کیف پول
                </button>
            </div>
            <div className='grid grid-cols-5 pr-4 pt-12 '>
                <div className='col-span-2 pl-2'>
                    <h6 className='font-bold mb-2'>شارژ کیف پول</h6>
                    <p className='text-sm'>مبلغ مورد نیاز خود را وارد نمایید یا از میان مبالغ پیشنهادی یک گزینه انتخاب نمایید</p>
                </div>
                <div className='col-span-3'>
                    <input type="text" className='outline-none border border-gray-300 rounded-lg align-middle w-full p-4' placeholder='مبلغ دلخواه شما (ریال)' />
                    <div className='flex flex-grow gap-2 py-4 w-full'>
                        {moneyButton.map((item, index) =>
                            <button type='button' className='shrink-0 bg-gray-200 text-sm text-gray-700 rounded-lg lg:px-4 px-2 py-1.5'>
                                {item} ریال
                            </button>)}
                    </div>
                </div>
            </div>
            <div className='flex text-red-600 items-center py-4 pr-4 '>
                <HistoryIcon className="h-6 w-6" />
                <button type='button' className='hover:bg-gray-100 rounded-md text-sm p-2 '>تاریخچه تراکنش ها</button>
            </div>
            <div className='flex justify-end items-center text-sm'>
                <p>مبلغ قابل پرداخت:    0 ریال</p>
                <button type='button' className='bg-red-400 rounded-lg text-white px-6 py-2 mr-3'> شارژ کیف پول </button>
            </div>
        </>
    )
}

export default WalletDetail;