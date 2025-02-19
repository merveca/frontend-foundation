import React from 'react';

const Header = () => {
  return (
    <div id="header" className="header fixed-top">
      <nav id="scrollspy" className="navbar navbar-expand-lg header-nav">
        <div className="container">
          <a
            className="navbar-brand  mr-lg-3 mr-xl-5 base-color"
            href="index-02-colorfull.html.htm"
          >
            westin
          </a>
          {/* <!--  Navbar Toggler Button Start --> */}
          <button
            className="navbar-toggler collapsed "
            type="button"
            data-toggle="collapse"
            data-target="#toggle-menu"
            aria-controls="toggle-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="lni lni-menu"></span>
          </button>
          {/* <!--  Navbar Toggler Button End --> */}
          <div className="collapse navbar-collapse" id="toggle-menu">
            <ul className="navbar-nav nav-pills ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
