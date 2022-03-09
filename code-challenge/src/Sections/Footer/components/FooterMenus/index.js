import Accordion from "react-tiny-accordion";

import "./styles.scss";

function FooterMenus(props) {
  return (
    <div className="footer-menus">
      {props.isMobile ? (
        <Acc menus={props.menus} />
      ) : (
        <Menu menus={props.menus} />
      )}
      <SocialIcons socialIcons={props.socialIcons} />
    </div>
  );
}

const Acc = (props) => {
  return (
    <Accordion className="accordion">
      {props.menus.map((menu) => (
        <div className="accordion__toggle" data-header={menu.title}>
          <ul className="footer-menus__menu">
            {menu.links.map((link) => (
              <li>{link.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </Accordion>
  );
};

const Menu = (props) => {
  return (
    <div className="footer-menus__left">
      {props.menus.map((menu) => (
        <div className="menu-container">
          <h4 className="title">{menu.title}</h4>
          <ul className="menu">
            {menu.links.map((link) => (
              <li>{link.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const SocialIcons = (props) => {
  return (
    <div className="footer-menus__social">
      <span className="title">{props.socialIcons.title}</span>
      <div className="footer-menus__social-icons">
        {props.socialIcons.icons.map((icon) => (
          <img alt={icon.alt} src={icon.src} />
        ))}
      </div>
    </div>
  );
};

export default FooterMenus;
