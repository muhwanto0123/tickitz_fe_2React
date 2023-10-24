import React from "react";


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

            <a className="d-desktop" href="">
              About
            </a>
            <a className="d-desktop" href="">
              ContactUs
            </a>
          </div>
          <button className="btn btn-dark px-5 d-desktop">Sign-in</button>
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
                <a className="nav-link text-center" href="#">
                  About
                </a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#">
                  ContactUs
                </a>
              </li>
              <li className="nav-item text-center">
                <button className="btn btn-dark">Sign-in</button>
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