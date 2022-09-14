import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUP.css";

function SignUP() {
  const [signupdata, setSignupdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkFoam, setCheckFoam] = useState(false);
  const { email, username, password, confirm_password } = signupdata;
  const handleChange = (e) => {
    setSignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

  function passchecking() {
    if (password != confirm_password || confirm_password != password) {
      setCheckPassword(true);
      setTimeout(() => {
        setCheckPassword(false);
      }, 3000);
    } else {
      setCheckPassword(false);
    }
  }
  useEffect(() => {
    return () => {
      axios
        .post("http://localhost:1337/users", signupdata)
        .then((response) => {
          this.state(signupdata);
          console.log("sucess");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  }, []);
  const formData = () => {
    console.log(signupdata);
  };
  return (
    <div class="mainlogin_box">
      <div class="login-box">
        <h2>Sign Up</h2>
        <form>
          <div class="user-box">
            <input
              type="text"
              name="username"
              required
              onChange={handleChange}
            />
            <label>Enter Your Full Name</label>
          </div>
          <div class="user-box">
            <input type="text" name="email" required onChange={handleChange} />
            <label>Email</label>
          </div>
          <div className={`user-box`}>
            <input
              type="password"
              name="password"
              className={` ${checkPassword ? "outline" : ""}`}
              required
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name="confirm_password"
              className={`${checkPassword ? "outline" : ""}`}
              required
              onChange={handleChange}
            />
            <label>Confrim Password</label>
          </div>
          <Link to={"#"} onClick={passchecking}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
          <div
            className={`alert ${checkPassword ? "block" : "none"}`}
            onClick={formData()}
          >
            Password is Not matched
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUP;
