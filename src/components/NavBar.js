import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/icons/tree.png";
import { ReactComponent as MenuIcon } from "../assets/icons/menu_icon.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import "./NavBar.css";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="logo-container"
          onClick={(event) => {
            window.open("/", "_self");
          }}
        >
          <div className="logo">
            <img className="logo-image" src={logo} alt="Logo" />
          </div>

          <div className="title-container">
            <h1 className="title">Linnea Malmström</h1>
            <h2 className="sub-title">psykoterapi och handledning</h2>
          </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavBar}>
          {showNavBar ? <CloseIcon width={40} /> : <MenuIcon width={50} />}
        </div>

        <div className={`nav-elements  ${showNavBar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavBar}>
                Hem
              </NavLink>
            </li>
            <li>
              <NavLink to="/psykoterapi" onClick={handleShowNavBar}>
                Psykoterapi
              </NavLink>
            </li>
            <li>
              <NavLink to="/foraldrastod" onClick={handleShowNavBar}>
                Föräldrastöd
              </NavLink>
            </li>
            <li>
              <NavLink to="/handledning" onClick={handleShowNavBar}>
                Handledning
              </NavLink>
            </li>
            <li>
              <NavLink to="/kvalitetssakring" onClick={handleShowNavBar}>
                Kvalitetssäkring
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" onClick={handleShowNavBar}>
                Kontakt
              </NavLink>
            </li>
            <li>
              <NavLink to="/hitta" onClick={handleShowNavBar}>
                Hitta hit
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
