import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";
import avatar from '../../images/avatar.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="sign-in">
        <form action="">
          <div className="imgcontainer">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>
          <div className="container2">
            <label for="uname">
              <b>Enter Your Email</b>
            </label>
            <input type="text" placeholder="Enter your email" name="uname" />
            <label for="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" />
            <div className="text-center mt-3">
              <Button className="custom-btn px-5 text-center" type="submit">
                Login
              </Button>
              <h6 className="mt-3">Or</h6>
              <p className="d-inline me-2">Sign-in with</p>
              <Link><FcGoogle className="fs-2" /></Link>
              <p className="mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
