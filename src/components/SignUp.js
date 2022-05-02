import React from 'react'

function SignUp() {
  return (
    <form className="lcontainer">
      <div className="Logincontainer">
        <h2>
          <b>Sign Up</b>
        </h2>
        <input
          type="text"
          placeholder="First & Last Name"
          className="login-input"
          required
        />
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
        <input type="submit" value="SignUp" className="login-button" required />
        <div>
          <p>
            Have An Account?{" "}
            <a href="#su" className="signup" onClick="xys();">
              Log In
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignUp