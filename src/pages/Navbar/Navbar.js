import React from "react";
import { NavLink, Link } from "react-router-dom";
import { links } from "../../data/links";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__title">
        <h4>Subala</h4>
        <span>Beauty Parlor</span>
      </Link>

      <div className="navbar__items">
        <ul className="navbar__list">
          {links.map((link) => (
            <li className="navbar__listitem" key={link.id}>
              <NavLink
                className="navbar__link"
                activeClassName="navbar__link--active"
                to={link.url}
                exact
                key={link.id}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
