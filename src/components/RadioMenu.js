import React from "react";
import { radioList } from "../data";
import { NavLink as Link } from "react-router-dom";
import "./RadioMenu.css";

function RadioMenu({ visible, isMobileDevice, currURL }) {
  // const itemsColor = isMobileDevice && { opacity: 0.5 };
  // const activeItemColor = isMobileDevice && { opacity: 1 };

  return (
    <div className="menu-container">
      <ul className={
          "menu-items-visible"}>
        {radioList.map((item, index) => (
          <li key={index}>
            <Link
              exact
              to={item.path}
              className="nav-links"
              activeClassName="active"
            >
              <p className="menu-items">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioMenu;
