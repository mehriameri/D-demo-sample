import React, { useState } from 'react';
import Modal from '../Modal';
import EditAddressDetail from './EditAddress/EditAddressDetail';
import DeleteAddressDetail from './EditAddress/DeleteAddressDetail';
import { DeleteBtnIcon, EditBtnIcon } from '../../../shared/UI/Icons';

const AddressBox = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    return (
        <div>
            <div className='rounded-lg border border-gray-100 hover:bg-gray-100 cursor-pointer px-4 py-6 mb-4'>
                <h6 className=' '>تهران - منطقه ۱۱، حر، کارگر جنوبی، آذربایجان، آژیده، گودرزی - واحد ۱ - پلاک ۹</h6>
                <div className='flex justify-end items-center pt-6'>
                    <h6 className='ml-auto text-gray-500'>09107447539</h6>
                    <button className='rounded-lg px-4 py-2 mx-1 mt-4 hover:bg-gray-200' type='button' onClick={() => setShowEditModal(true)}>
                        <EditBtnIcon className="h-6 w-6" />
                    </button>
                    <button className='rounded-lg px-4 py-2 mx-1 mt-4 hover:bg-gray-200' type='button' onClick={() => setShowDeleteModal(true)}>
                        <DeleteBtnIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
            {showEditModal && <Modal><EditAddressDetail closeModal={() => setShowEditModal(false)} /></Modal>}
            {showDeleteModal && <Modal><DeleteAddressDetail closeModal={() => setShowDeleteModal(false)} /></Modal>}
        </div>
    )
}

export default AddressBox;