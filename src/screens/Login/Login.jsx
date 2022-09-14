import React from "react";
import "./Login.css";
function Login() {
  return (
    <foam class="mainlogin_box">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" name="email" required />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </foam>
  );
}

export default Login;
