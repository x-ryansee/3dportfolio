import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  
    return (
      <nav className="navbar">
        <div className="navbar__toggle" onClick={toggleNav}>
          {showNav ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul className={showNav ? 'navbar__list active' : 'navbar__list'}>
          <li className="navbar__item">
            <a href="#">Links</a>
            <ul className="navbar__sublist">
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>
          <li className="navbar__item">
            <a href="#">Projects</a>
            <ul className="navbar__sublist">
              <li>
                <a href="#">Tahoe + Napa Idylls</a>
              </li>
              <li>
                <a href="#">The Loop</a>
              </li>
              <li>
                <a href="#">Fusion Kitchen</a>
            </li>
          </ul>
        </li>
        <li className="navbar__item">
          <a href="#">About</a>
          <ul className="navbar__sublist">
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
