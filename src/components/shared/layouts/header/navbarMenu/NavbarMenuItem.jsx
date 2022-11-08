import React from 'react';

const NavbarMenuItem = ({ icon, text, textClasses, classes, mouseEnterr,mouseLeave, clicked }) => {
    return (
        <div
            className={`flex flex-shrink-0 items-center text-xs cursor-pointer border-white border-b-2 hover:border-b-2 hover:border-b-red-500 py-3 ${classes}`}
            onMouseEnter={mouseEnterr}
            onMouseLeave={mouseLeave}
            onClick={clicked}
        >
            <img src={icon} alt="" className='w-5 h-5' />
            <p className={`px-1 ${textClasses}`} >{text}</p>
        </div>
    )
}

export default NavbarMenuItem;