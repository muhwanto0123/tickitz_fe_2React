import "../style/Auth.css";
import "../style/Auth.mobile.css";

import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);
  const [sucesNotif, setSucessNotif] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('profile')) {
      navigate("/")
    }
  }, [])

  const handleRegister = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://tickitz-be.onrender.com/gusti/auth/register", {
        email: email,
        password: password,
        fullname: fullname,
        phone_number: phoneNumber,
      })
      .then(() => {
        setSucessNotif(true);
      })
      .catch((error) => {
        const errFullname = error?.response?.data?.messages?.fullname?.message;
        const errPhone_number = error?.response?.data?.messages?.phone_number?.message;
        const errEmail = error?.response?.data?.messages?.email?.message;
        const errPassword = error?.response?.data?.messages?.password?.message;

        setSucessNotif(false);
        setErrMsg(
          errFullname ??
          errPhone_number ??
          errEmail ??
          errPassword ??
          "Something wrong with the app"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
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

              {sucesNotif ? (
                <div class="alert alert-dark" role="alert">
                  Register Sucess Please check your email
                </div>
              ) : null}
              {errMsg ? (
                <div class="alert alert-danger" role="alert">
                  {errMsg}
                </div>
              ) : null}

              <div className="mb-4">
                <input
                  className="form-control"
                  placeholder="Full Name"
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="d-grid pt-4">
                <button
                  className="btn btn-primary"
                  onClick={handleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
              </div>
              <p className="text-center pt-4">
                Already have account ?{" "}
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
