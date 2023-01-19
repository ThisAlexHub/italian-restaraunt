import React from 'react';
import Nav from './Nav';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="little lemon logo"/>
            </Link>
            <Nav />
        </header>
    );
};

export default Header;