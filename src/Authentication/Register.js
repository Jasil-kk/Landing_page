import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({});

  const handleDetails = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("url").then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="auth-main">
      <div className="auth-component">
        <h1>Register Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <label>Username</label>
          <input name="username" onChange={handleDetails} type="text" />
          <label>Email</label>
          <input name="email" onChange={handleDetails} type="email" />
          <label>Password</label>
          <input name="password" onChange={handleDetails} type="password" />
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            onChange={handleDetails}
            type="password"
          />
          <input type="submit" value="SIGN UP" />
        </form>
        <p>
          Already a user ? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
