import React from "react";
import {useRouter} from "next/dist/client/router";
import Link from 'next/link';

export const SideMenu = () => {

    const router = useRouter();

    const getLinkClassName = (pathName: string) => {
        return `SideMenu__link${router.pathname === pathName ? '--current': ''}`;
    };

    return <div className="SideMenu">
        <ul className="SideMenu__list">
            <li>
                <Link href={'/'}>
                    <a className={getLinkClassName('/')}>
                        <span className="SideMenu__dot"/>
                        <span className="SideMenu__link-name">About</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href={'/skills'}>
                    <a className={getLinkClassName('/skills')}>
                        <span className="SideMenu__dot"/>
                        <span className="SideMenu__link-name">Skills</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href={'/contact'}>
                    <a className={getLinkClassName('/contact')}>
                        <span className="SideMenu__dot"/>
                        <span className="SideMenu__link-name">Contact</span>
                    </a>
                </Link>
            </li>
        </ul>
    </div>
};