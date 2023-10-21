import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu_icon.svg";
import "./navbar.css";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo width={50} />
        </div>

        <div className="title-container">
          <h1 className="title">Linnea Malmström</h1>
          <h2 className="sub-title">psykoterapi och handledning</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavBar}>
          <MenuIcon width={50} />
        </div>

        <div className={`nav-elements  ${showNavBar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Hem</NavLink>
            </li>
            <li>
              <NavLink to="/psykoterapi">Psykoterapi</NavLink>
            </li>
            <li>
              <NavLink to="/föräldrastöd">Föräldrastöd</NavLink>
            </li>
            <li>
              <NavLink to="/handledning">Handledning</NavLink>
            </li>
            <li>
              <NavLink to="/kvalitetssäkring">Kvalitetssäkring</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
            <li>
              <NavLink to="/hitta-hit">Hitta hit</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
