import { useState } from "react";

import hamburgerMenu from "../assets/hamburgermenu.svg";

function MobileNav(props) {
  const [drawer, toggleDrawer] = useState(false);

  return (
    <div className="mobile-menu">
      <div
        className="mobile-menu__toggle"
        onClick={() => {
          toggleDrawer((drawer) => (drawer = true));
        }}
      >
        <img alt="mobile menu toggle" src={hamburgerMenu} />
      </div>

      <div
        className={
          drawer ? "mobile-menu__drawer active" : "mobile-menu__drawer"
        }
      >
        <span
          onClick={() => {
            toggleDrawer((drawer) => (drawer = false));
          }}
          className="mobile-menu__drawer--close"
        >
          &times;
        </span>
        <ul className="mobile-menu__drawer-menu">
          {props.menu.map((link) => (
            <li>{link.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
