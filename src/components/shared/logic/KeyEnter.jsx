import { useEffect } from 'react';

const KeyEnter = ({ enterHandler }) => {
    useEffect(() => {
        const keyEnter = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                enterHandler()
            }
        }
        document.addEventListener('keydown', keyEnter)
        return () => {
            document.removeEventListener('keydown', keyEnter)
        }
    }, [])
}

export default KeyEnter