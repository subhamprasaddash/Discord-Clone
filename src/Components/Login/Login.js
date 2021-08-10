import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";

function Login() {
  const signIn = () => {
    //Google Auth....
    auth.signInWithPopup(provider).catch((err) => alert.err);
  };

  return (
    <div className="login">
      <div>
        <img
          src="https://www.pngkit.com/png/full/19-191133_discord-logo-png-transparent-graphic-discord.png"
          alt=""
          className="login-logo"
        />
      </div>
      <div className="login-box">
        <h1>Welcome to Discord</h1>
        <button className="login-btn" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
