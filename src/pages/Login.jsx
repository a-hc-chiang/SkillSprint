import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Components/logo.png';
import Navbar from "../Components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log("email added! " + email);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
    console.log("password added! " + pass);
  };

  const handleLogin = () => {
    navigate("/create-profile");
  };

  const handleGmail = () => {
    window.open("https://accounts.google.com/v3/signin/", "_blank");
  };

  return (
    <div className="LoginContainer">
      {/* <div className="LoginHeader">
        <div id="LoginLogo"></div>
        <div id="LoginSigninButton"></div>
      </div> */}
      <Navbar buttonText="sign in"></Navbar>
      <div className="LoginBody">
        <div id="LoginFormDiv">
          <div id="formLogo">
          <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
          </div>
          <div id="loginTextDiv">
            
          <h1 className="Log-In">Log in</h1>
          </div>
          <div id="signInTextDiv">
            <p className="Sign-In-Text">Please sign in or sign up below</p>
          </div>
          <form className="Login-form">
            <div className="LoginContainer2">
              <label className="Email-Text" for="email">
                Email
              </label>
              <input
                className="input"
                value={email}
                onChange={handleEmail}
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="email"
              />
            </div>

            <button className="EmailButton" onClick={handleLogin}>
              Continue with Email
            </button>
            <button className="GoogleButton" onClick={handleGmail}>
              Sign in with Google
            </button>
          </form>
        </div>
      </div>

      {/* <button>Already have an account?</button> */}
    </div>
  );
}
