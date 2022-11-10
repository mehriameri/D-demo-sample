import React, { useState } from 'react';

import EditDeleteBtn from './EditDeleteBtn';
import Modal from '../Modal';
import EditAddressDetail from './EditAddress/EditAddressDetail';
import DeleteAddressDetail from './EditAddress/DeleteAddressDetail';
import { DeleteBtnIcon, EditBtnIcon } from '../../../shared/UI/Icons';

const AddressBox = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    return (
        <div>
            <div className='rounded-lg border border-gray-100 hover:bg-gray-100 hover:font-semibold cursor-pointer px-4 py-6 mb-4'>
                <h6 className=' '>تهران - منطقه ۱۱، حر، کارگر جنوبی، آذربایجان، آژیده، گودرزی - واحد ۱ - پلاک ۹</h6>
                <div className='flex justify-end items-center mt-6'>
                    <h6 className='ml-auto text-gray-500'>09107447539</h6>
                    <EditDeleteBtn openModal={() => setShowEditModal(true)} icon={<EditBtnIcon className="h-6 w-6" />} />
                    <EditDeleteBtn openModal={() => setShowDeleteModal(true)} icon={<DeleteBtnIcon className="h-6 w-6" />} />
                </div>
            </div>
            <Modal modalData={<EditAddressDetail closeModal={() => setShowEditModal(false)} />} visible={showEditModal} />
            <Modal modalData={<DeleteAddressDetail closeModal={() => setShowDeleteModal(false)} />} visible={showDeleteModal} />
        </div>
    )
}

export default AddressBox;