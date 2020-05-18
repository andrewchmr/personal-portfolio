import React from "react";

export const Hamburger = () => {
    return <button className="Hamburger">
        <span className="Hamburger__line Hamburger__line--short Hamburger__line--top"/>
        <span className="Hamburger__line Hamburger__line--long Hamburger__line--middle"/>
        <span className="Hamburger__line Hamburger__line--short Hamburger__line--bottom"/>
    </button>
};