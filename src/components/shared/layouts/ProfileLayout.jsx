import React from 'react';
import PersonalInfo from '../../profilePage/sidebar/PersonalInformation/PersonalInfo';
import Wallet from '../../profilePage/sidebar/PersonalInformation/Wallet';
import ListItems from '../../profilePage/sidebar/sidebarList/ListItems';

const ProfileLayout = ({ children }) => {
    return (
        <div className='mx-10 mt-6'>
            <div className='flex gap-4'>
                <div className='flex flex-col gap-2'>
                    <div className='bg-white rounded-lg shadow-md p-2'>
                        <PersonalInfo phoneNumber='09107447539' />
                        <Wallet />
                    </div>
                    <ListItems />
                </div>
                <div className='flex-grow bg-white rounded-lg p-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default ProfileLayout;
