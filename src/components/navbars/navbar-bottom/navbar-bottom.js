import React from 'react'
import Classes from './navbar-bottom.module.css';
import { Link } from 'react-router-dom'
export const NavbarBotttom = () => {
    return (
        <div className={Classes.NavBar}>
            <p>LOGO</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>  
        </div>
    )
}
