import React from 'react';
import { AttachFileIcon, PhoneIcon } from '../../../shared/UI/Icons';
import SelectInpute from './SelectInpute';

function SupportRegisterMessage() {
    const selectListBoxes = {
        item1: {
            question: " نوع درخواست خود را انتخاب کنید",
            title: [
                "انتخاب کنید", "آدرس فروشگاه", "اخذ نمایندگی", 'فروش تلفنی',
                'کد تخفیف', 'اکالا', 'مرکز تماس', 'کالا و مرسوله', 'نرم افزاری', 'بازاریابی',
                'سایر موارد', 'تامین کننده', 'همکاری', 'پیشنهاد ملک', 'قابلیت جدید'
            ]
        },
        item2: {
            question: "سوال",
            title: ['انتخاب کنید', "آدرس فروشگاه", "اخذ نمایندگی", 'فروش تلفنی', 'کد تخفیف', 'اکالا']
        },
        item3: {
            question: "شکایت",
            title: ["انتخاب کنید", 'مرکز تماس', 'کالا و مرسوله', 'نرم افزاری', 'بازاریابی']
        },
        item4: {
            question: "پیشنهاد و انتقاد",
            title: ["انتخاب کنید", 'سایر موارد', 'تامین کننده', 'همکاری', 'پیشنهاد ملک']
        },
        item5: {
            question: "درخواست",
            title: ["انتخاب کنید", 'قابلیت جدید']
        },
    };

    return (
        <div>
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
            <div className='border-t '>
                <p className='text-xs mt-4'>برای پیگیری سفارش یا طرح سوالات خود، از طریق فرم زیر با ما در ارتباط باشید . تلاش میکنیم هرچه سریعتر به مشکل شما رسیدگی کنیم</p>
                <div className=' mt-4'>
                    <SelectInpute selectList={selectListBoxes} />
                </div>
                <select className='outline-none border border-gray-300 rounded-md text-xs text-gray-600 w-full mt-2 p-4'>
                    <option value="کدام سفارشتان دچار مشکل شده است؟">کدام سفارشتان دچار مشکل شده است؟</option>
                </select>
                <textarea
                    rows='10'
                    className='outline-none border rounded-lg w-full text-xs active:border-red mt-4 p-4'
                    placeholder='لطفا در مورد موضوعی که انتخاب کرده اید توضیح دهید'
                />
                <div className='flex justify-end text-xs'>
                    <button className='flex border font-bold px-6 py-2 rounded-md hover:bg-gray-100 ml-2'>
                        <AttachFileIcon className="h-4 w-4 ml-1" />
                        پیوست فایل
                    </button>
                    <button className='bg-red-600 text-white font-bold px-6 py-2 rounded-md '>ارسال</button>
                </div>
            </div>
        </div>
    )
}

export default SupportRegisterMessage;