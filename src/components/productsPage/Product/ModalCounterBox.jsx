import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '../../shared/UI/Icons';

const ModalCounterBox = ({ counter, increamentHandler, decreamentHandler, deleteHandler, classes }) => {
    return (
        <div className={`flex items-center gap-3 rounded-lg bg-white font-bold text-red-500 border-2 border-gray-200 hover:drop-shadow-md px-2 py-1.5 ${classes}`}>
            <button type='button' onClick={increamentHandler}>
                <PlusIcon className='w-4 h-4' />
            </button>
            {counter}
            {counter > 1 ?
                <button type='button' onClick={decreamentHandler}>
                    <MinusIcon className='w-4 h-4' />
                </button>
                : <button type='button' onClick={deleteHandler}>
                    <TrashIcon className='w-4 h-4' />
                </button>}
        </div>
    )
}

export default ModalCounterBox;