import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link';
import classNames from "classnames";

export const SideMenu = () => {

  const router = useRouter();

  const getLinkClassName = (pathName: string) => {
    return classNames(
      {
        'SideMenu__link--current': router.pathname === pathName
      }
    );
  };

  return <div className="SideMenu">
    <ul className="SideMenu__list">
      <li>
        <Link href={'/'}>
          <a className={getLinkClassName('/')}>
            <span className="SideMenu__dot" />
            <span className="SideMenu__link-name">About</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href={'/skills'}>
          <a className={getLinkClassName('/skills')}>
            <span className="SideMenu__dot" />
            <span className="SideMenu__link-name">Skills</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href={'/projects'}>
          <a className={getLinkClassName('/projects')}>
            <span className="SideMenu__dot" />
            <span className="SideMenu__link-name">Projects</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href={'/contact'}>
          <a className={getLinkClassName('/contact')}>
            <span className="SideMenu__dot" />
            <span className="SideMenu__link-name">Contact</span>
          </a>
        </Link>
      </li>
    </ul>
  </div>
};