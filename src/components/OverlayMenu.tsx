import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { AppContext } from "../context/AppContext";

const OverlayMenu = () => {

  const router = useRouter();
  const context = useContext(AppContext);

  const hideMenu = () => {
    context?.setMenuOpen?.(false);
  };

  const getLinkClassName = (pathName: string) => {
    return classNames(
      {
        'OverlayMenu__elem--active': router.pathname === pathName
      }
    );
  };

  return <div className="OverlayMenu">
    <ul className="OverlayMenu__nav">
      <div className="OverlayMenu__elem">
        <Link href={'/'}>
          <a className={getLinkClassName('/')}
            onClick={hideMenu}>About</a>
        </Link>
      </div>
      <div className="OverlayMenu__elem">
        <Link href={'skills'}>
          <a className={getLinkClassName('/skills')}
            onClick={hideMenu}>Skills</a>
        </Link>
      </div>
      <div className="OverlayMenu__elem">
        <Link href={'projects'}>
          <a className={getLinkClassName('/projects')}
            onClick={hideMenu}>Projects</a>
        </Link>
      </div>
      <div className="OverlayMenu__elem">
        <Link href={'/contact'}>
          <a className={getLinkClassName('/contact')}
            onClick={hideMenu}>Contact</a>
        </Link>
      </div>
    </ul>
  </div>
};

export default OverlayMenu;