import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({});
    console.log(data);
  return (
    <div className="auth-main">
      <div className="auth-component">
        <h1>Login Form</h1>
        <form action="">
          <label >Email</label>
          <input type="text" onChange={(e)=> setData({...data,username: e.target.value})} id="username" autoComplete="off" /> <br />
          <label >Password</label>
          <input type="password" onChange={(e)=> setData({...data,password: e.target.value})} id="password" /> <br />
          <input type="submit" value="LOGIN" />
        </form>
        <p>
          Need an account ? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
