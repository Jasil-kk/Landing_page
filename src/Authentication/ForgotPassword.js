import React, { useState } from 'react'

const ForgotPassword = () => {
  const [data,setData] = useState({});
  return (
    <div className="auth-main">
        <div className="auth-component">
        <h1>Forgot Password</h1>
        <form action="">
          <label >Enter Your Email</label>
          <input type="email"  autoComplete="off" onChange={(e)=>setData({...data,email:e.target.value})}/> <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword