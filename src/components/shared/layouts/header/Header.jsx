import React from 'react'
import useDeviceType from '../../../../hooks/useDeviceType';
import headerImg from "../../../../assets/img/headerImg.jpg";
import Navbar from './navbar/Desktop/Navbar';
import NavbarMobile from './navbar/Mobile/NavbarMobile';
import NavbarMenu from './navbarMenu/NavbarMenu';

const Header = () => {
    const { isDesktop } = useDeviceType();
    return (
        <>
            <img src={headerImg} alt="" />
            {isDesktop ? <Navbar /> : <NavbarMobile />}
            {isDesktop ? <NavbarMenu /> : null}
        </>
    )
}

export default Header