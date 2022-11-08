import React from 'react';
import ContactUs from './ContactUs';
import useDeviceType from '../../../../hooks/useDeviceType';
import OnlineSupport from '../footer/onlineSupport/OnlineSupport';
import AppLogo from '../../../../assets/img/footer/footerlogo2.png';
import LogoPersion from '../../../../assets/img/LogoPersion.svg';
import AppIcon from '../../../../data/jsonFiles/footer/appIcon.json';
import FooterLink from '../../../../data/jsonFiles/footer/footerLink.json';
import FooterPart1List from '../../../../data/jsonFiles/footer/footerPart1.json';
import StandardsIcon from '../../../../data/jsonFiles/footer/standardsimg.json';
import footerData from '../../../../data/jsonFiles/footer/footerData.json';
import { ArrowLeftIcon, ArrowTopIcon, DotesIcon } from '../../../shared/UI/Icons';

const Footer = () => {
    const { isDesktop, isMobile } = useDeviceType()
    const scrollToTopHandler = () => { window.scrollTo({ behavior: 'smooth', top: 0 }) };
    return (
        <div>
            <div className='flex flex-col gap-4 border-t border-t-gray-300 mt-8 mx-6 relative'>
                <div className='flex justify-between my-6'>
                    <img src={LogoPersion} alt="" />
                    <button className='border border-gray-300 text-gray-400 rounded-lg px-4'>
                        <div className='flex gap-2 justify-center items-center' onClick={scrollToTopHandler}>
                            <p className='text-sm'>بازگشت به بالا</p>
                            <ArrowTopIcon className='w-4 h-4' />
                        </div>
                    </button>
                </div>
                <div className='lg:flex gap-6 text-sm'>
                    <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
                    <span className='text-white lg:text-black text-xs'>|</span>
                    <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                </div>
                {isDesktop && <div className='flex justify-around my-8'>
                    {FooterPart1List.map((item, index) =>
                        <div key={index}>
                            <img src={item.img} alt="" className='mx-auto' />
                            <p className='text-xs'>{item.title}</p>
                        </div>)}
                </div>}
                <div className='lg:flex'>
                    <div className='grid gap-6 grid-cols-2 grid-flow-row lg:grid-cols-3'>
                        {footerData.map((item, index) =>
                            <div key={index} className='text-md leading-8 '>
                                <p className='font-bold' >{item.title}</p>
                                {item.data.map((item, index) => <p key={index} className='text-gray-400'>{item}</p>)}
                            </div>)}
                    </div>
                    <ContactUs />
                </div>
                <div className='lg:flex justify-between bg-blue-900 rounded-lg items-center p-4'>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={AppLogo} alt="logo" className='lg:w-14 lg:h-14 w-8 h-8' />
                        <p className='font-bold lg:text-2xl text-lg text-white'> دانلود اپلیکیشن دیجی‌کالا</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center lg:my-0 my-6'>
                        {AppIcon.map((item, index) => <a href="" key={index}><img src={item} /></a>)}
                        {isDesktop &&
                            <div className='bg-white rounded-lg'>
                                <DotesIcon className='w-10 h-10 text-blue-800 font-bold' />
                            </div>}
                    </div>
                    {isMobile &&
                        <div className='flex gap-1 items-center text-white justify-center'>
                            <p className='text-sm'>اطلاعات بیشتر</p>
                            <ArrowLeftIcon className='w-3 h-3' />
                        </div>}
                </div>
                <div className='lg:flex justify-between border-y border-y-gray-300 mx-2 py-6 my-4'>
                    <div className='lg:w-1/2'>
                        <p className='text-lg font-bold my-4'>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</p>
                        <p className='text-sm text-gray-400 leading-7'>
                            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                        </p>
                        <div className='flex gap-2 items-end text-teal-400 font-bold py-4'>
                            <p className='text-sm'>مشاهده بیشتر</p>
                            <ArrowLeftIcon className='w-3 h-3 font-bold' />
                        </div>
                    </div>
                    <div className='flex gap-2 lg:items-start justify-center'>
                        {StandardsIcon.map((item, index) =>
                            <div key={index} className='border border-gray-300 rounded-lg p-4'>
                                <img src={item} alt="" className='w-16' />
                            </div>
                        )}
                    </div>
                </div>
                <p className='text-xs text-gray-400 text-center'>
                    برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
                </p>
            </div>
            <div className='grid grid-rows-6 grid-flow-col lg:grid-rows-2 bg-gray-200 mt-6'>
                {FooterLink.map((item, index) => <div className='flex border border-gray-300 justify-center items-center p-4' key={index}>
                    <img src={item} alt="" />
                </div>)}
            </div>
            <div className='flex sticky bottom-10 px-6'>
                {isDesktop && <OnlineSupport />}
            </div>
        </div>
    )
}

export default Footer;