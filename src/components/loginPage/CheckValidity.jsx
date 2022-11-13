import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { ArrowLeftIcon, ArrowRightIcon } from '../shared/UI/Icons';
import { Logo } from '../shared/UI/Logo';
import { isAuthenticated } from '../../redux/authentication/LoginIndex';
import ModalError from './ModalError';
import useTimer from '../../hooks/useTimer';
import useDeviceType from '../../hooks/useDeviceType';

const CheckValidity = ({ setStep, phoneNumber }) => {
    const [loaded, setLoaded] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [otpValidationError, setOtpValidationError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showModalError, setShowModalError] = useState(false);
    const [classes, setClasses] = useState('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-teal-400 focus:border-teal-400 caret-teal-400 rounded-lg text-center w-full p-3 mt-4');
    const { minute, second } = useTimer({ minute: 3, second: 0 });
    const { isDesktop, isMobile } = useDeviceType();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const otpCode = 12345;
    const loginHandler = () => {
        if (inputValue == otpCode) {
            if (minute != 0 && second != 0) {
                navigate('/');
                dispatch(isAuthenticated(phoneNumber));
            } else {
                setShowModalError(true)
            }
        };
    }
    const modalHandler = () => {
        setShowModalError(true);
        setErrorMessage('')
    }
    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
        inputStyleHandler();
        event.target.validity.patternMismatch ?
            !otpValidationError && setOtpValidationError(true)
            :
            otpValidationError && setOtpValidationError(false)
    }
    const errorMessageHandler = () => {
        setShowModalError(false)
        inputValue == otpCode ?
            setErrorMessage('')
            :
            otpValidationError ?
                setErrorMessage('کد باید 5 رقمی باشد')
                : inputValue ? modalHandler() : setErrorMessage('کد باید 5 رقمی باشد')
    }
    const inputStyleHandler = () => {
        otpValidationError
            ? setClasses('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-red-400 focus:border-red-400 caret-red-400 rounded-lg text-center w-full p-3 mt-4')
            : inputValue == otpCode
                ? setClasses('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-teal-400 focus:border-teal-400 caret-teal-400 rounded-lg text-center w-full p-3 mt-4')
                : setClasses('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-red-400 focus:border-red-400 caret-red-400 rounded-lg text-center w-full p-3 mt-4')
    }
    useEffect(() => {
        if (loaded) {
            errorMessageHandler();
            inputStyleHandler();
        } else {
            setLoaded(true);
        }
    }, [otpValidationError]);
    return (
        <>
            <div className='z-50'>
                {isMobile && <ArrowRightIcon className="w-6 h-6 cursor-pointer text-red" click={() => setStep(1)} />}
                {showModalError && <ModalError />}
            </div>
            <div className='w-full flex flex-col justify-center items-center fixed inset-0 z-10'>
                <div className='w-full lg:border-2 border-gray-200 rounded-xl p-6' style={{ maxWidth: 400 }}>
                    {isDesktop && <div className='flex items-center py-2'>
                        <ArrowRightIcon className="w-6 h-6 cursor-pointer" click={() => setStep(1)} />
                        <Logo className='mx-auto' />
                    </div>}
                    <h1 className='font-bold text-lg py-2'>کد تایید را وارد کنید</h1>
                    <p className='text-xs py-2'>کد تایید برای شماره {phoneNumber} پیامک شد</p>
                    <input
                        className={classes}
                        type="text"
                        pattern="[0-9]{5}"
                        value={inputValue}
                        onChange={onChangeHandler}
                        maxLength={5}
                        inputMode='numeric'
                        autoFocus
                    />
                    <p className='text-xs text-red-500 py-2'>{errorMessage}</p>
                    <button className='text-blue-400 text-xs'>
                        <div className='flex items-end'>
                            <p>ورود با رمز عبور</p>
                            <ArrowLeftIcon className='w-3 h-3' />
                        </div>
                    </button>
                    <div className='flex justify-center text-xs py-4'>
                        {(minute === 0 && second === 0)
                            ? <p className='flex'>
                                دریافت مجدد کد از طریق
                                <a className='flex items-end text-blue-400 cursor-pointer'>
                                    <span className='px-1'> پیامک </span> <ArrowLeftIcon />
                                </a>
                                یا
                                <a className='flex items-end text-blue-400 cursor-pointer'>
                                    <span className='px-1'>تماس</span> <ArrowLeftIcon />
                                </a>
                            </p>
                            : <p> {second} : {minute} مانده تا دریافت مجدد کد </p>}
                    </div>
                    <button
                        className='bg-red-500 text-white rounded-lg w-full my-4 p-3'
                        type='button'
                        onClick={loginHandler}
                    >
                        تایید
                    </button>
                </div>
            </div>
        </>
    )
}

export default CheckValidity;

