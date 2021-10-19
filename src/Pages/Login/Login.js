import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";
import avatar from '../../images/avatar.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
   const {
     signInUsingGoolgle,
     handleEmailChange,
     handlePasswordChange,
     LoginProcess,
   } = useAuth();

  return (
    <div className="container">
      <div className="sign-in">
        <form onSubmit={LoginProcess}>
          <div className="imgcontainer">
            <img src={avatar} alt="Avatar" className="avatar" />
          </div>
          <div className="container2">
            <b>Enter Your Email</b>
            <input
              onBlur={handleEmailChange}
              type="text"
              placeholder="Enter your email"
              required
            />
            <b>Password</b>
            <input
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Enter Password"
              required
            />
            <div className="text-center mt-3">
              <Button className="custom-btn px-5 text-center" type="submit">
                Login
              </Button>
              <h6 className="mt-3">Or</h6>
              <p className="d-inline me-2">Sign-in with</p>
              <FcGoogle
                className="fs-2 google-btn"
                onClick={signInUsingGoolgle}
              />
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
