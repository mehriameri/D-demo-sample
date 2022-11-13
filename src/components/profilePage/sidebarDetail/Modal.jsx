import React from 'react';

function Modal({ children }) {
  return (<div className='fixed inset-0 flex justify-center items-center border-2 bg-opacity-30 bg-black z-50'>
    <div style={{ width: 'auto', maxWidth: 800, minWidth: 400 }}>
      {children}
    </div>
  </div>
  )
}

export default Modal;