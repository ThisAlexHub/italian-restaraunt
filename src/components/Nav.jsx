import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order-online">Order Online</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </nav>

                <Menu right>
                    <Link className="menu-item" to="/">Home</Link>
                    <Link className="menu-item" to="/about">About</Link>
                    <Link className="menu-item" to="/menu">Menu</Link>
                    <Link className="menu-item" to="/reservations">Reservations</Link>
                    <Link className="menu-item" to="/order-online">Order Online</Link>
                    <Link className="menu-item" to="/login">Login</Link>
                </Menu>
        </>
    );
};

export default Nav;