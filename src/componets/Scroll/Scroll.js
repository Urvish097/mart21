import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Scroll = ({ children }) => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scroll({
            top: pathname === "/Shop_singel" ? 400 : 0,
            behavior: "smooth",
        });
    }, [pathname, Scroll])


    return (
        <>
            {children}
        </>
    )
}

export default Scroll