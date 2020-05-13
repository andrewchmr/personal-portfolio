import React from "react";
import './SideMenu.scss';
import {NavLink} from "react-router-dom";

export const SideMenu = () => {
    return <div className="SideMenu">
        <ul className="SideMenu__list">
            <li>
                <NavLink activeClassName="current" exact to={'/'}>
                    <span className="SideMenu__dot"/>
                    <span className="SideMenu__link-name">About</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="current" to={'/skills'}>
                    <span className="SideMenu__dot"/>
                    <span className="SideMenu__link-name">Skills</span>
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="current" to={'/contact'}>
                    <span className="SideMenu__dot"/>
                    <span className="SideMenu__link-name">Contact</span>
                </NavLink>
            </li>
        </ul>
    </div>
};