import React from 'react';
import { ArrowLeftIcon } from '../../../shared/UI/Icons';

function ListItem({isActive,clicked,id,icon,text}) {
    return (
        <li
            className={`flex items-center rounded-xl border-2 bg-white border-gray-50 cursor-pointer active:bg-red-100 ${isActive ? 'bg-red-100' : 'hover:bg-gray-100'} px-2`}
            onClick={clicked}
            key={id}
        >
            {/* {icon} */}
            <p className='mr-2 py-6 text-sm ' >{text}</p>
          <ArrowLeftIcon className="h-4 w-4 mr-auto"/>
        </li>
    )
}

export default ListItem;
