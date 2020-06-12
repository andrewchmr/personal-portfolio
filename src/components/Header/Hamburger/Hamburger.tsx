import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const Hamburger = () => {
    const context = useContext(AppContext);

    const toggleMenu = () => {
        context?.setMenuOpen?.(!context.menuOpen);
    };

    return <button onClick={toggleMenu} className="Hamburger">
        <span className="Hamburger__line Hamburger__line--short Hamburger__line--top"/>
        <span className="Hamburger__line Hamburger__line--long Hamburger__line--middle"/>
        <span className="Hamburger__line Hamburger__line--short Hamburger__line--bottom"/>
    </button>
};