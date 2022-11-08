import React from 'react';
import { ArrowBottomIcon, UserIcon } from '../../../../UI/Icons';
import useDeviceType from '../../../../../../hooks/useDeviceType';

const AuthBtn = ({ openUserAccountMenu }) => {
    const {isDesktop }=useDeviceType();
    return (
        <button
            type='button'
            className='bg-white cursor-pointer focus:bg-red-100 focus:rounded-lg py-2 px-3'
            onClick={openUserAccountMenu}
        >
            <div className='flex gap-1 items-center'>
                <UserIcon className='w-6 h-6' />
                {isDesktop && <ArrowBottomIcon className='w-3 h-3' />}
            </div>
        </button>
    )
}

export default AuthBtn;