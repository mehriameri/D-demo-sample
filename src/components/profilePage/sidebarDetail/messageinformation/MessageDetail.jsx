import React from 'react'
import TitlesidebarDetail from '../TitleSidebarDetail';
import EmptyItem from '../EmptyItem';
import emptyItemImg from '../../../../assets/img/empty-notification.svg';
import SwitchCheckbox from '../SwitchCheckbox';

const MessageDetail = () => {
    return (
        <>
            <TitlesidebarDetail title='پیام های من' />
            <div className='flex '>
                <SwitchCheckbox />
                <span className='mr-2 text-sm'> فقط پیام های خوانده نشده</span>
            </div>
            <EmptyItem img={emptyItemImg} message='پیامی موجود نیست' />
        </>
    )
}

export default MessageDetail;