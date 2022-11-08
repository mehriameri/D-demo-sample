import React from 'react';

const UserAccountItem = ({ title, icon, click, classes }) => {
    return (
        <div className='flex items-center gap-3 text-gray-800 cursor-pointer px-4 w-56' onClick={click}>
            <img src={icon} alt="" className='w-7 h-7' />
            <div className={`border-b border-b-gray-200 w-full ${classes}`}>
                <p className='text-sm py-3'>{title}</p>
            </div>
        </div>
    )
}

export default UserAccountItem;