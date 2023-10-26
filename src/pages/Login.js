import "../style/Auth.css";
import "../style/Auth.mobile.css";

import { Link } from "react-router-dom";
import React from "react";

function Login() {
  return (
    <div id="page_login" style={{ overflow: "hidden" }}>
      <div className="row">
        <div className="col col-md-7">
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: "url('/img/background_img/background.jpg')",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/">
                <img
                src="/img/icon_media/tickitz_logo.png"
                width="500px"
                height="190px"
                />
            </Link>
            <p style={{ fontSize: "35px", color: "white" }}>
              Wait, Watch, Wow!
            </p>
          </div>
        </div>
        <div className="col col-md-5">
          <div
            className="pe-5 p-2"
            style={{
              display: "flex",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div style={{ width: "100%" }}>
              <h1 style={{ fontSize: "48px" }}>Sign In</h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "grey",
                  marginBottom: "30px",
                }}
              >
                Sign in with your data that you 
                entered during your registration
              </p>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="write your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="write your password"
                />
              </div>
              <div className="d-grid pt-2">
                <button className="btn btn-primary btn-lg">Sign In</button>
              </div>
              <p className="text-center pt-4">
                Forgot your password ? {" "}
                <Link to="/forgot-account" style={{ color: "#5F2EEA" }}>
                    Reset Now
                </Link>
              </p>
              <p className="text-center">
                Don't have an account ? {" "}
                <Link to="/register" style={{ color: "#5F2EEA" }}>
                    Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
