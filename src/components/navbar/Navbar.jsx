import "./Navbar.css";
import NavItems from "../../utils/NavItemsList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as ButtonClose } from "../../assets/shared/icon-close.svg";
import { ReactComponent as ButtonMenu } from "../../assets/shared/icon-hamburger.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const [width, setWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    if (width < 768) setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  useEffect(() => {
    if (width > 768) {
      setShowMenu(false);
    }
  }, [width]);

  return (
    <header>
      <div>
        <Logo />
      </div>

      <button className="header-toggle-btn" onClick={toggleMenu}>
        {!showMenu ? <ButtonMenu /> : <ButtonClose />}
      </button>

      <nav className={showMenu ? "active" : null}>
        <ul>
          {NavItems.map((item) => (
            <li
              className={active === item.name ? "nav-text active" : "nav-text"}
            >
              <Link
                to={item.route}
                onClick={() => {
                  setActive(item.name);
                  toggleMenu();
                }}
              >
                <span>{item.id}&nbsp;</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
