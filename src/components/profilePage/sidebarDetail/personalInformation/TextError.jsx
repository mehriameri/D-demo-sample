import React from 'react';

const TextError = ({ children }) => {
    return (
        <div className='text-red-400 text-xs'>
            {children}
        </div>
    )
}

export default TextError;