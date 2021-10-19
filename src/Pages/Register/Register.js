import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Register.css'
import avatar from "../../images/avatar.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const {
    signInUsingGoolgle,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
  } = useAuth();

  return (
    <div>
      <div className="container">
        <div className="sign-in">
          <form onSubmit={handleRegistration}>
            <div className="imgcontainer">
              <img src={avatar} alt="Avatar" className="avatar" />
            </div>
            <div className="container2">
              <label htmlfor="uname">
                <b>Enter Your Email</b>
              </label>
              <input
                onBlur={handleEmailChange}
                type="text"
                placeholder="Enter your email"
                name="uname"
                required
              />
              <label htmlfor="psw">
                <b>Password</b>
              </label>
              <input
                onBlur={handlePasswordChange}
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <div className="text-center mt-3">
                <Button className="custom-btn px-5 text-center" type="submit">
                  Register
                </Button>
                <h6 className="mt-3">Or</h6>
                <p className="d-inline me-2">Sign-in with</p>
                <FcGoogle
                  className="fs-2 google-btn"
                  onClick={signInUsingGoolgle}
                />
                <p className="mt-3">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
