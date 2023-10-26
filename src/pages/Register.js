import "../style/Auth.css";
import "../style/Auth.mobile.css";

import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

function Register() {
  const [fullname, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRefister = () => {
    axios
        .post("https://tickitz-be.onrender.com/v1/auth/register", {
            email: email,
            password: password,
            fullname: fullname,
            phone_number: phoneNumber,
        })
        .then(() => {
            console.log("berhasil")
        }).catch(() => {
            console.log("error")
        })
  };

  return (
    <div id="page_register" style={{ overflow: "hidden" }}>
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
            <div className="pt-2" style={{ width: "100%" }}>
              <h1 style={{ fontSize: "35px" }}>Sign-Up</h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "grey",
                  marginBottom: "30px",
                }}
              >
                Fill your additional details
              </p>

              <div className="mb-2">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="write your full Name"
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="write your phone number"
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="write your email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="write your password"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="d-grid pt-4">
                <button className="btn btn-primary btn-lg">Sign Up</button>
              </div>
              <p className="text-center pt-4">
                Alreadt have account ?{" "}
                <Link to="/login" style={{ color: "#5F2EEA" }}>
                  Sign-in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
