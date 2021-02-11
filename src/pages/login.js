import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/login.scss";

export default function Login() {
  let history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username === "admin" && password === "admin") {
      history.push({ pathname: "/home", state: { username: username } });
    }
  };

  return (
    <form className="loginForm">
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-dark btn-lg btn-block"
        onClick={() => handleSubmit()}
      >
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}
