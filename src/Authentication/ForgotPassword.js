import axios from 'axios';
import React, { useState } from 'react'
import { BaseUrl } from '../AxiosApi';

const ForgotPassword = () => {
  const [data,setData] = useState({});
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${BaseUrl}/account/resetpassword/`,data).then((response)=>{
      console.log(response);
    })
  }
  return (
    <div className="auth-main">
        <div className="auth-component">
        <h1>Forgot Password</h1>
        <form action="" onSubmit={handleSubmit}>
          <label >Enter your registered  email address</label>
          <input type="email"  autoComplete="off" onChange={(e)=>setData({...data,email:e.target.value})}/> <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword