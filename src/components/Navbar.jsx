import React from "react";
import { Link } from "react-router-dom";
// import Login from '../pages/Login';

function navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          {/* <!-- content nav desktop --> */}
          <div
            className="d-flex align-items-center gap-5"
            id="content_desktop_nav"
          >
            <a href="" className="navbar-brand">
              <img className="logo" src="/img/icon_nav.jpg" alt="logo" />
            </a>
            <Link to={'/'}>
              <a className="d-desktop" href="">
                Home
              </a>
            </Link>
            <a className="d-desktop" href="">
              List Movie
            </a>
          </div>
          <Link to={`/register`}>
            <button className="btn btn-dark px-5 d-desktop">Sign-up</button>
          </Link>
          {/* <!-- end content nav desktop --> */}

          {/* <!-- content nav mobile --> */}
          <button
            className="navbar-toggler d-mobile"
            type="button"
            
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'}>
                  <a className="nav-link text-center" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#">
                  List Movie
                </a>
              </li>
              <li className="nav-item text-center">
                <Link to={'/register'}>
                  <button className="btn btn-dark">Sign-in</button>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- end content nav mobile --> */}
        </div>
      </nav>
    </>
  );
}

export default navbar;