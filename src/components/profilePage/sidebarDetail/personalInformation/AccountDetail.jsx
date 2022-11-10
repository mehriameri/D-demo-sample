import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TitlesidebarDetail from '../TitleSidebarDetail';
import EditGenderBtn from './EditGenderBtn';
import TextError from './TextError';
import { UserIcon } from '../../../shared/UI/Icons';
import { useSelector } from 'react-redux';

const initialValues = {
    firstName: '',
    lastName: '',
    date: '',
    email: ''
}
const validationSchema = Yup.object({
    firstName: Yup.string().required('این قسمت نمیتواند خالی باشد'),
    lastName: Yup.string().required('این قسمت نمیتواند خالی باشد'),
    date: Yup.string().required('این قسمت نمیتواند خالی باشد'),
    email: Yup.string()
        .email('پست الکترونیک وارد شده درست نیست')
        .required('این قسمت نمیتواند خالی باشد'),
})
const onSubmit = values => {
    console.log('formik', values)
}
const AccountDetail = () => {
    const isAuth = useSelector(state => state.userInfo);
    return (
        <>
            <TitlesidebarDetail title='مشخصات حساب کاربری' />
            <div className='flex items-center pb-4'>
                <UserIcon className="text-gray-600 bg-gray-100 h-6 w-6 ml-2 rounded-full " />
                <p>{isAuth.user.phoneNumber}</p>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form >
                    <div className='flex flex-grow w-full gap-2 py-5 h-32'>
                        <div className='flex flex-col w-1/2' >
                            <label className='bg-white text-sm font-bold text-gray-500 px-2' htmlFor='firstName'>نام</label>
                            <Field
                                className='border rounded-lg outline-none p-3'
                                type='text'
                                name='firstName'
                                placeholder='نام'
                            />
                            <ErrorMessage name='firstName' component={TextError} />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <label className='bg-white text-sm font-bold text-gray-500 px-2' htmlFor='lasttName'>نام خانوادگی</label>
                            <Field
                                className='border rounded-lg outline-none p-3'
                                type='text'
                                name='lastName'
                                placeholder='نام خانوادگی'
                            />
                            <ErrorMessage name='lastName' component={TextError} />
                        </div>
                    </div>
                    <div className='flex flex-grow w-full gap-2 py-5 h-32'>
                        <div className='flex flex-col w-1/2' >
                            <label className='bg-white text-sm font-bold text-gray-500 px-2' htmlFor='date'>تاریخ تولد</label>
                            <Field
                                className='border rounded-lg outline-none p-3'
                                type='text'
                                name='date'
                                placeholder='تاریخ تولد'
                            />
                            <ErrorMessage name='date' component={TextError} />
                        </div>
                        <div className='flex flex-col w-1/2' >
                            <label className='bg-white text-sm font-bold text-gray-500 px-2' htmlFor='email'>ایمیل</label>
                            <Field
                                className='border rounded-lg outline-none p-3'
                                type='email'
                                name='email'
                                placeholder='آدرس ایمیل'
                            />
                            <ErrorMessage name='email' component={TextError} />
                        </div>
                    </div>

                    <div className='flex w-1/2'>
                        <EditGenderBtn gender='خانم' icon={<UserIcon className="h-6 w-6" />} />
                        <EditGenderBtn gender='آقا' icon={<UserIcon className="h-6 w-6" />} />
                    </div>
                    <button type='submit' className='flex justify-center bg-red-500 text-white text-sm rounded-lg p-8 py-3 mr-auto mx-4'>
                        ثبت تغییرات
                    </button>
                </Form>
            </Formik>
        </>
    )
}

export default AccountDetail;
