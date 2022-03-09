import React from "react";

import "./styles.scss";

import PromoBar from "./components/PromoBar";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import UserIcons from "./components/UserIcons";

import { headerMenu } from "./data";

function Header(props) {
  return (
    <header className="header">
      <PromoBar isMobile={props.isMobile} />
      <div className="navigation">
        <div className="navigation__left">
          {props.isMobile ? <MobileNav menu={headerMenu} /> : null}

          <div className="site-logo">
            <img src={require("./assets/logo.png")} alt="site logo" />
          </div>
        </div>

        {!props.isMobile ? <DesktopNav menu={headerMenu} /> : null}

        <div className="navigation__right">
          <UserIcons />
        </div>
      </div>
    </header>
  );
}

export default Header;
