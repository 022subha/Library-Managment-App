import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="box">
      <img src="/logo.png" alt="logo" />
      <p>Library Managment System</p>
      <input type="text" placeholder="username" />
      <br />
      <input type="password" placeholder="password" />
    </div>
  );
}

export default Login;
