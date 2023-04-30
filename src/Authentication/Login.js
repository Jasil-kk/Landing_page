import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../AxiosApi";

const Login = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    console.log(data);

const handleSubmit = (e) =>{
  e.preventDefault();
  axios.post(`${BaseUrl}/account/login/`,data).then((response)=>{
    console.log(response.data);
    localStorage.setItem("token",response.data.token);
    navigate("/pages")
  })
}

  return (
    <div className="auth-main">
      <div className="auth-component">
        <h1>Login Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <label >Username</label>
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
