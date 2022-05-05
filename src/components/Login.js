import React from "react";
import '../Login.css'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'
function Login() {

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "Required All Feilds" });
    }
    try {
      setData({ ...data, loading: true });
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setData({ ...data, loading: false });
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const {name,email,password,error,loading} = data

  return (
    <form className="lcontainer" onSubmit={handleSubmit}>
      <div className="Logincontainer">
        <h2>
          <b>Log In</b>
        </h2>
        <input
          type="text"
          placeholder="Username(Email)"
          className="login-input"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        {error ? <p className="error">{error}</p> : null}
        <input type="submit" value="Login" className="login-button" required />
        <div>
          <p>
            Not a User ?{" "}
            <a href="#su" className="signup">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
