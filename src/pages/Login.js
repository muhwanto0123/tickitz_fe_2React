import "../style/Auth.css";
import "../style/Auth.mobile.css";

import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
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

  const handleLogin = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://tickitz-be.onrender.com/gusti/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response?.data?.data?.token;
        const profile = response?.data?.data?.result;

        localStorage.setItem("token", token)
        localStorage.setItem('profile', JSON.stringify(profile))
        // console.log(response)
        // console.log(token)
        // localStorage.setItem("profile", JSON.stringify(profile))
        // console.log(profile)
        // localStorage.setItem = ('token', token);
        // localStorage.setItem = ("profile", profile);
        setSucessNotif(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      })
      .catch((error) => {
        const errEmail = error?.response?.data?.messages?.email?.message;
        const errPassword = error?.response?.data?.messages?.password?.message;

        setSucessNotif(false);
        setErrMsg(
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

              {sucesNotif ? (
                <div class="alert alert-dark" role="alert">
                  Login sucess, plese wait for redirect to our app
                </div>
              ) : null}
              {errMsg ? (
                <div class="alert alert-danger" role="alert">
                  {errMsg}
                </div>
              ) : null}

              <div className="mb-4">
                <input
                  className="form-control form-control-lg"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  className="form-control form-control-lg"
                  placeholder="Password"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="d-grid pt-2">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign In"}
                </button>
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
