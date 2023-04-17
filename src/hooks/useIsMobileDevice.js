import { useEffect, useState } from 'react';

// custom hook to check if the device is mobile or not
const useIsMobileDevice = () => {
    // integration of react hooks here
    const [isMobile, setIsMobile] = useState(false);

    // checking if the device is mobile or not here on resize
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1280) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }, false);
    }, []);

    // checking if the device is mobile or not here on loading
    useEffect(() => {
        window.addEventListener('load', () => {
            if (window.innerWidth < 1280) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }, false);
    }, []);

    return isMobile;
}

export default useIsMobileDevice;