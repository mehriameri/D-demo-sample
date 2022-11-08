import React from 'react';
import { InterIcon } from '../../../../UI/Icons';

const EntranceBtn = ({ text, click, className }) => {
    return (
        <button
            type='button'
            className={className}
            onClick={click}
        >
            <div className='flex items-center'>
                <InterIcon className="w-6 h-6" />
                <p>{text}</p>
            </div>
        </button>
    )
}

export default EntranceBtn;