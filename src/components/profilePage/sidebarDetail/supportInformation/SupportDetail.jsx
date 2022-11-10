import React, { useState } from 'react';
import TitleSidebarDetail from '../TitleSidebarDetail';
import SupportButton from './SupportButton';
import SupportListMessage from './SupportListMessage';
import SupportRegisterMessage from './SupportRegisterMessage';

const SupportDetail = () => {
    const [step, setStep] = useState(1);
    return (
        <>
            <TitleSidebarDetail title='تماس با پشتیبانی' />
            <div className='flex border-b-2 border-gray-100'>
                <SupportButton clicked={() => setStep(1)} title='ثبت پیام ها' />
                <SupportButton clicked={() => setStep(2)} title='لیست پیام ها' />
            </div>
            {step === 1
                ? <SupportRegisterMessage />
                : <SupportListMessage />}
        </>
    )
}

export default SupportDetail;