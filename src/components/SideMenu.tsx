import React from "react";
import { anchors } from "../utils/anchors";

const getSectionName = (name: string) => {
  return name.replace(/-/g, ' ');
}

export const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul id='sideMenu' className="SideMenu__list">
        {anchors.map((anchor) => (
          <li key={anchor} data-menuanchor={anchor}>
            <a href={`/#${anchor}`}>
              <span className="SideMenu__dot" />
              <span className="SideMenu__link-name">{getSectionName(anchor)}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>);
};