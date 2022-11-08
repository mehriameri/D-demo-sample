import React from 'react';
import SocialMediaIcon from '../../../../data/jsonFiles/footer/socialMediaIcon.json';

const ContactUs = () => {
    return (
        <div className='mr-auto'>
            <div className='flex lg:flex-col my-8'>
                <p className='font-bold'>  همراه ما باشید!</p>
                <div className='flex gap-6 lg:my-6 mr-auto'>
                    {SocialMediaIcon.map((item, index) => <img src={item} alt="" key={index} className='w-8 h-8' />)}
                </div>
            </div>
            <div className=''>
                <p className='font-bold'>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
                <div className='flex gap-2 font-bold my-4'>
                    <input type="text" placeholder='ایمیل شما' className='bg-gray-200 text-gray-400 rounded-lg focus:outline-none w-full p-3' />
                    <button className='bg-gray-200 text-white rounded-lg p-2'>ثبت</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;