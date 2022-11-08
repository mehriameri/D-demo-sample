import React, { useState, useEffect } from 'react';
import { Logo } from '../shared/UI/Logo';
import CheckValidity from './CheckValidity';

const Login = () => {
    const [loaded, setLoaded] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState(1)
    const [errorMessage, setErrorMessage] = useState('');
    const [inputTouched, setInputTouched] = useState(false)
    const [mobileValidationError, setMobileValidationError] = useState(false);
    const [classes, setClasses] = useState('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-teal-400 focus:border-teal-400 caret-teal-400 rounded-lg w-full p-3 mt-4');
    const loginHandler = () => {
        if (!mobileValidationError) {
            setStep(2);
        }
    }
    const onFocusHandler = () => {
        if (inputTouched && !inputValue) {
            errorMessageHandler();
        }
    }
    const onBlurHandler = (event) => {
        inputStyleHandler();
        // for first input touch
        !inputTouched && setInputTouched(true)
        // ---------------------
        if (event.target.validity.patternMismatch) {
            !mobileValidationError && setMobileValidationError(true)
        } else {
            mobileValidationError && setMobileValidationError(false)
        }
    }
    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
        inputStyleHandler();
        if (event.target.validity.patternMismatch) {
            !mobileValidationError && setMobileValidationError(true)
        } else {
            mobileValidationError && setMobileValidationError(false)
        }
    }
    const errorMessageHandler = () => {
        mobileValidationError
            ? inputValue ? setErrorMessage('شماره موبایل نادرست است') : setErrorMessage('لطفا این قسمت را خالی نگذارید')
            : inputValue ? setErrorMessage('') : setErrorMessage('لطفا این قسمت را خالی نگذارید')
    }
    const inputStyleHandler = () => {
        mobileValidationError
            ? setClasses('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-red-400 focus:border-red-400 caret-red-400 rounded-lg w-full p-3 mt-4')
            : inputValue ? setClasses('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-teal-400 focus:border-teal-400 caret-teal-400 rounded-lg w-full p-3 mt-4') : setClasses('outline-none bg-gray-200 lg:bg-white border-b-2 lg:border border-red-400 focus:border-red-400 caret-red-400 rounded-lg w-full p-3 mt-4')
    }
    useEffect(() => {
        if (loaded) {
            errorMessageHandler()
            inputStyleHandler()
        } else {
            setLoaded(true)
        }

    }, [mobileValidationError]);
    return (
        <>
            {step === 1 ?
                <div className='w-full flex flex-col justify-center items-center fixed inset-0'>
                    <div className='w-full lg:border-2 border-gray-200 rounded-xl p-6' style={{ maxWidth: 400 }}>
                        <Logo className='mx-auto p-2' />
                        <h1 className='font-bold text-lg py-2'>ورود | ثبت نام</h1>
                        <div className='text-xs py-2'>
                            <p className='py-2' >سلام!</p>
                            <p>لطفا شماره موبایل خود را وارد کنید</p>
                        </div>
                        <input
                            className={classes}
                            type="text"
                            pattern="09[0-9]{2}[0-9]{3}[0-9]{4}"
                            value={inputValue}
                            onFocus={onFocusHandler}
                            onBlur={onBlurHandler}
                            onChange={onChangeHandler}
                            maxLength={11}
                            inputMode='numeric'
                            autoFocus
                        />
                        <p className='text-xs text-red-500 py-2'>{errorMessage}</p>
                        <button
                            className='bg-red-500 text-white rounded-lg w-full my-4 p-3'
                            type='button'
                            onClick={loginHandler}
                        >
                            ورود
                        </button>
                        <p className='text-xs'>
                            ورود شما به معنای پذیرش <a href="" className='text-blue-400'>شرایط دیجی‌کالا</a> و قوانین <a href="" className='text-blue-400'>حریم‌خصوصی</a> است
                        </p>
                    </div>
                </div>
                :
                <CheckValidity setStep={setStep} phoneNumber={inputValue} />
            }
        </>
    )
}

export default Login;