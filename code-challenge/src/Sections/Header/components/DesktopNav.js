function DesktopNav(props) {
  return (
    <ul className="desktop-nav">
      {props.menu.map((link) => (
        <li>
          <a href={link.link}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default DesktopNav;
