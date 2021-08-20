import React from "react";
import { radioList } from "../data";
import { Link } from "react-router-dom";
import "./RadioMenu.css";
import { useMediaQuery } from "react-responsive";

function RadioMenu({ visible }) {
  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 375px)",
  // });

  // console.log(isMobileDevice === true);

  return (
    <div className="menu-container">
      <ul className={visible ? "menu-items-visible" : "menu-items-hidden"}>
        {radioList.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              <p className="menu-items">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RadioMenu;
