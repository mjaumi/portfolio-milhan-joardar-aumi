import { useEffect } from 'react';

const ScrollToTop = ({ children }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        });
    }, []);

    return children || null;
}

export default ScrollToTop;