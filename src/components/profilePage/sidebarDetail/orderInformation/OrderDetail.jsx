import React, { useState } from 'react';
import EmptyItem from '../EmptyItem';
import TitlesidebarDetail from '../TitleSidebarDetail'
import OrderButton from './OrderButton';
import emptyItemImg from '../../../../assets/img/order-empty.svg';

const OrderDetail = () => {
    const [defaultTabIndex, setDefaultTabIndex] = useState(0)
    const orders = [
        {
            title: 'سفارش های باز',
            message: 'شما در حال حاضر سفارش باز ندارید',
        },
        {
            title: 'سفارش های بسته',
            message: 'شما در حال حاضر سفارش بسته ندارید',
        },
    ]

    return (
        <>
            <TitlesidebarDetail title='سفارش های من' />
            <div>
                <div className='flex border-b-2 border-gray-100'>
                    {orders.map((item, index) => (
                        <OrderButton isActive={defaultTabIndex === index} onClick={() => setDefaultTabIndex(index)} title={item.title} />
                    ))}
                </div>
                <div className='flex justify-center itemes-center m-5'>
                    <EmptyItem img={emptyItemImg} message={orders[defaultTabIndex].message} />
                </div>
            </div>
        </>
    )
}

export default OrderDetail;