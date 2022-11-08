import React from 'react';
import { useSelector } from 'react-redux';
import { ArrowLeftIcon, EllipsisVerticalIcon, SparklesIcon } from '../shared/UI/Icons';
import CheckoutCard from './CheckoutCard';
import clubpointImg from '../../assets/img/clubpoint.svg';
import freeDelivery from '../../assets/img/freeDelivery.svg';
import useDevicetype from '../../hooks/useDeviceType';
import emptyCard from '../../assets/img/emptyCart.svg';
import MainLayout from '../shared/layouts/MainLayout';

const CheckoutPage = () => {
    const shoppingBasketInfo = useSelector(state => state.shoppingBasketInfo);
    const totalBasketItem = useSelector(state => state.shoppingBasketInfo);
    const { isDesktop } = useDevicetype();
    return (
        <MainLayout hasFooter={false} >
            <div className='bg-white lg:px-16 px-4 py-4'>
                <div className='w-full border-b border-gray-300 my-2'>
                    <div className='flex lg:w-1/4'>
                        <div className='flex gap-1 w-full items-center lg:justify-start justify-center font-bold active:border-b-2 active:border-red-500 cursor-pointer py-2'>
                            <p className='text-gray-500 text-sm active:text-red-500'>سبد خرید</p>
                            <span className='bg-red-500 text-white text-xs rounded-full py-1 px-2'>{shoppingBasketInfo.totalquantity}</span>
                        </div>
                        <div className='flex gap-1 w-full items-center lg:justify-start justify-center font-bold active:border-b-2 active:border-red-500 cursor-pointer py-2'>
                            <p className='text-gray-500 text-sm active:text-red-500'> خرید بعدی</p>
                            <span className='bg-red-500 text-white  text-xs rounded-full py-1 px-2'>0</span>
                        </div>
                    </div>
                </div>
                {totalBasketItem.shoppingBasket.length > 0
                    ? <div className='lg:flex gap-3'>
                        <div className='lg:border lg:border-gray-300 lg:rounded-lg w-full pt-4'>
                            <div className='px-4'>
                                <div className='flex justify-between items-center'>
                                    <p className='font-bold'>سبد خرید شما</p>
                                    <EllipsisVerticalIcon className='w-5 h-5 text-gray-400' />
                                </div>
                                <p className='text-gray-400 text-xs py-2'>{shoppingBasketInfo.totalquantity} کالا</p>
                            </div>
                            <div className=''>
                                {shoppingBasketInfo.shoppingBasket.map((item, index) => <CheckoutCard key={index} dataList={item} />)}
                            </div>
                        </div>
                        {isDesktop
                            ? <div className='flex flex-col gap-3 w-106'>
                                <div className='border border-gray-300 rounded-lg text-gray-500 text-sm'>
                                    <div className='flex flex-col gap-5 p-4'>
                                        <div className='flex justify-between'>
                                            <p>قیمت کالاها</p>
                                            <p>{shoppingBasketInfo.priceAfterOff} تومان</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <p>جمع سبد خرید</p>
                                            <p>{shoppingBasketInfo.priceBeforeOff} تومان</p>
                                        </div>
                                        <p className='text-[11px] text-gray-500'>هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود</p>
                                        <div className='flex justify-between font-bold text-red-500'>
                                            <p>سود شما از خرید</p>
                                            <p>{shoppingBasketInfo.priceBeforeOff - shoppingBasketInfo.priceAfterOff} تومان</p>
                                        </div>
                                        <button className='bg-red-500 text-white font-bold text-center rounded-lg py-3'>ادامه</button>
                                    </div>
                                    <div className='flex justify-between bg-gray-100 rounded-b-lg p-4'>
                                        <div className='flex gap-1 items-center'>
                                            <img src={clubpointImg} alt="" />
                                            <p>دیجی‌کلاب</p>
                                        </div>
                                        <p>126 امتیاز</p>
                                    </div>
                                </div>
                                <p className='text-[11px] text-gray-500'>هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند</p>
                                <div className='flex flex-shrink flex-col gap-2 border border-gray-300 rounded-lg p-4'>
                                    <div className='flex flex-shrink justify-between items-end'>
                                        <div className='flex gap-1 items-end'>
                                            <SparklesIcon className='shrink w-4 h-4 text-[#b4278a]' />
                                            <p className='shrink text-xs text-gray-700 font-semibold'>مزایای پلاس برای این سفارش</p>
                                        </div>
                                        <ArrowLeftIcon className='w-3 h-3' />
                                    </div>
                                    <div className='flex gap-2'>
                                        <div>
                                            <p className='text-gray-300 font-bold text-[8px] px-0.6'>|</p>
                                            <img src="https://img.icons8.com/emoji/48/000000/purple-circle-emoji.png" className='w-1.5 h-1.5' />
                                            <p className='text-gray-300 font-bold text-[12px] px-0.6'>|</p>
                                            <img src="https://img.icons8.com/emoji/48/000000/purple-circle-emoji.png" className='w-1.5 h-1.5' />
                                        </div>
                                        <div className=''>
                                            <p className='shrink text-[11px] text-gray-500 pt-2'>25,048 تومان هدیه نقدی</p>
                                            <p className='text-[11px] text-gray-500 pt-2'>بازگشت تا ۳۰ روز پس از تحویل</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between border border-gray-300 rounded-lg'>
                                    <div className='p-2'>
                                        <p className='text-sm text-gray-700 font-semibold'>ارسال رایگان</p>
                                        <p className='text-[11px] text-gray-500 py-2'>برای سفارش بالای 500 هزار تومان</p>
                                    </div>
                                    <img src={freeDelivery} alt="" className='w-28' />
                                </div>
                            </div>
                            : <div className='flex justify-between items-center sticky bottom-0 border-t border-gray-300 bg-white py-4'>
                                <button className='bg-red-500 text-white font-bold text-center rounded-lg py-3 w-1/2'>ادامه</button>
                                <div className='flex flex-col gap-2 text-xs font-semibold'>
                                    <p className='text-gray-600'>جمع سبد خرید</p>
                                    <p className='text-left'>{shoppingBasketInfo.priceBeforeOff} تومان</p>
                                </div>
                            </div>}
                    </div>
                    : <div className='lg:border lg:border-gray-300 lg:rounded-lg w-full pt-4'>
                        <div className='flex flex-col gap-4 text-center'>
                            <img src={emptyCard} alt="" className='mx-auto' />
                            <p className='font-bold '>سبد خرید شما خالی است!</p>
                            <p className='text-xs text-gray-500'>می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                            <div className='flex gap-2 text-[#589fda] font-bold text-sm justify-center pb-10 pt-4'>
                                <p>تخفیف‌ها و پیشنهادها</p>
                                <p>|</p>
                                <p>محصولات پرفروش روز</p>
                            </div>
                        </div>
                    </div>}
            </div>
        </MainLayout>
    )
}

export default CheckoutPage;