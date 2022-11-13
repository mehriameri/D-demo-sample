import React from 'react';
import { useNavigate } from 'react-router';
import useDeviceType from '../../../hooks/useDeviceType';
import { ArrowRightIcon } from '../../shared/UI/Icons';

function TitlesidebarDetail({ title }) {
    const { isMobile } = useDeviceType();
    const navigate = useNavigate();
    return (
        <div className='flex gap-2 items-end font-bold pb-10 pt-4'>
            {isMobile && <ArrowRightIcon className='w-5 h-5 cursor-pointer' click={() => navigate('/profile')} />}
            <h6 className='lg:border-r-4 px-2 border-red-400'> {title}</h6>
        </div>
    )
}

export default TitlesidebarDetail;