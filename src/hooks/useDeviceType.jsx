import { useMediaQuery } from 'react-responsive';

const useDeviceType = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    return { isMobile, isDesktop }
}

export default useDeviceType;