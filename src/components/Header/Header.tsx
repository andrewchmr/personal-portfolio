import React, { useContext } from "react";
import { Hamburger } from "./Hamburger/Hamburger";
import Link from 'next/link';
import { AppContext } from "../../context/AppContext";

export const Header = () => {
    const context = useContext(AppContext);

    const hideMenu = () => {
        context?.setMenuOpen?.(false);
    };

    return <header className="Header">
        <nav className="Header__bar">
            <div className="Header__bar--left">
                <Link href={'/'}>
                    <a className="Header__bar--title"
                       onClick={hideMenu}>Andriy Chemerynskiy</a>
                </Link>
            </div>
            <Hamburger/>
            <div className="Header__bar--right">Software Development</div>
        </nav>
    </header>
};