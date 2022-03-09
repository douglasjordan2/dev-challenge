import Newsletter from "./components/Newsletter";
import FooterMenus from "./components/FooterMenus";

import { footerMenu1, footerMenu2, socialIcons } from "./data";

function Footer(props) {
  const menus = [footerMenu1, footerMenu2];

  return (
    <footer>
      <Newsletter isMobile={props.isMobile} />
      <FooterMenus
        menus={menus}
        socialIcons={socialIcons}
        isMobile={props.isMobile}
      />
    </footer>
  );
}

export default Footer;
