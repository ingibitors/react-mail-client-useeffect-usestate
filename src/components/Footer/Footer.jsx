import React from 'react';
import logo from '../../logo.svg';

import Globe from "../theme/icons/globe";

const Footer = () => {
    console.log('logo',logo)
    return (
        <div>
            Footer
           <div style={{width:50}}> <img src={logo} alt="logo"/></div>
            <Globe/>
        </div>
    );
};

export default Footer;
