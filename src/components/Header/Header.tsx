import React from "react";
import {Hamburger} from "./Hamburger/Hamburger";
import Link from 'next/link';

export const Header = () => {
    return <header className="Header">
        <nav className="Header__bar">
            <div className="Header__bar--left">
                <div className="Header__bar--title">
                    <Link href={'/'}><a>Andriy Chemerynskiy</a></Link>
                </div>
            </div>
            <Hamburger/>
            <div className="Header__bar--right">Software Development</div>
        </nav>
    </header>
};