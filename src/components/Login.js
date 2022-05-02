import React from "react";
import '../Login.css'
function Login() {
  return (
    <form className="lcontainer">
      <div className="Logincontainer">
        <h2>
          <b>Log In</b>
        </h2>
        <input
          type="text"
          placeholder="Username(Email)"
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          required
        />
        <input type="submit" value="Login" className="login-button" required />
        <div>
          <p>
            Not a User ?{" "}
            <a href="#su" className="signup" onClick="xys();">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
