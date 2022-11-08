import React from 'react';

const MainItemMenu = ({ menuList, textClasses, classes, mouseOver, click }) => {
    return (
        <div className={`flex items-center text-[12px] text-gray-700 cursor-pointer hover:text-red-500 hover:bg-gray-100 p-4 w-52 ${classes}`}
            onMouseOver={mouseOver}
            onClick={click}
        >
            <img src={menuList.icon} alt="" className='w-5 h-5' />
            <p className={`px-1 ${textClasses}`} >{menuList.title}</p>
        </div>
    )
}

export default MainItemMenu;