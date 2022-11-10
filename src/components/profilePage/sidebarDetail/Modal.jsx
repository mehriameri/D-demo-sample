import React from 'react';

function Modal({ visible, modalData }) {
  return (
    visible
      ? <div className='fixed inset-0 flex justify-center items-center border-2 bg-opacity-30 bg-black'>
        <div style={{ width: 'auto', maxWidth: 800, minWidth: 400 }}>
          {modalData}
        </div>
      </div>
      : null
  )
}

export default Modal;