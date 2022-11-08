import { useEffect } from 'react';

const CloseWithOnClickScreen = ({ showModal, setShowModal, modalRef }) => {
    const checkIfClickedOutside = (event) => {
        if (showModal && modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        }
    }, [showModal]);

}

export default CloseWithOnClickScreen;