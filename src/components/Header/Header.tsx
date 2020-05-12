import React from "react";
import './Header.scss';
import {Link} from "react-router-dom";
import {Hamburger} from "./Hamburger/Hamburger";

export const Header = () => {
    return <header className="Header">
        <nav className="Header__bar">
            <div className="Header__bar--left">
                <div className="Header__bar--title">
                    <Link to={'/'}>Andriy Chemerynskiy</Link>
                </div>
            </div>
            <Hamburger/>
            <div className="Header__bar--right">Software Development</div>
        </nav>
    </header>
};