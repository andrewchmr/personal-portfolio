import React, { useContext } from "react";
import Link from 'next/link';
import { AppContext } from "../../context/AppContext";
import dynamic from "next/dist/next-server/lib/dynamic";

const Hamburger = dynamic(() => import('./Hamburger/Hamburger'));

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