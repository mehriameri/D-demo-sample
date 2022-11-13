import React from 'react';
import EmptyItem from '../EmptyItem';
import TitlesidebarDetail from '../TitleSidebarDetail';
import emptyItemImg from '../../../../assets/img/gift-card.svg';

const DiscountsDetail = () => {
    return (
        <>
            <TitlesidebarDetail title='کدهای تخفیف من' />
            <EmptyItem
                img={emptyItemImg}
                message='شما در حال حاضر تخفیفی ندارید'
                extraMessage='به زودی دوباره به اینجا سر بزنید' />
            <button type='button' className='flex justify-center bg-red-500 text-white font-semibold rounded-lg px-4 py-2 my-4 mx-auto'>
                مشاهده پرتخفیف ترین کالاها
            </button>
        </>
    )
}

export default DiscountsDetail;