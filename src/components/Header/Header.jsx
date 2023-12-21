import React from 'react';
import './Header.css'
import logo from '../../image/logo.png'
import avator from '../../image/avator.jpg'

const Header = () => {
    return (
        <>
            <div className='nav-container'>
                <img src={logo} alt="" />
                <img className='avator-logo' src={avator} alt="" />
            </div>
            <hr />
        </>
    );
};

export default Header;