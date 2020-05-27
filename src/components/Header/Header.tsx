import React from "react";
import {Hamburger} from "./Hamburger/Hamburger";
import Link from 'next/link';

export const Header = () => {
    return <header className="Header">
        <nav className="Header__bar">
            <div className="Header__bar--left">
                <Link href={'/'}>
                    <a className="Header__bar--title">Andriy Chemerynskiy</a>
                </Link>
            </div>
            <Hamburger/>
            <div className="Header__bar--right">Software Development</div>
        </nav>
    </header>
};