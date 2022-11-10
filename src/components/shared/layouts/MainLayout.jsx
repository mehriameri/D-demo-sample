import React from 'react';
import { useSelector } from 'react-redux';
import Footer from "./footer/Footer";
import Header from './header/Header';

const MainLayout = ({ children, hasFooter = true }) => {
    const { toggleDropDown } = useSelector(state => state.toggleDropDown);
    return (
        <>
            <Header />
            <div className={`${toggleDropDown ? 'opacity-40 bg-black' : ''}`}>
                {children}
            </div>
            {hasFooter && <Footer />}
        </>
    )
}

export default MainLayout;