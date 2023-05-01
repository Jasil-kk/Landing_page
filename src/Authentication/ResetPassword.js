import React, { useState } from 'react'

const ResetPassword = () => {
  const [data,setData] = useState({});
  return (
    <div className="auth-main">
        <div className="auth-component">
        <h1>Reset Password</h1>
        <form action="">
          <label >Enter your new Password</label>
          <input type="password"  autoComplete="off" onChange={(e)=>setData({...data,password:e.target.value})}/> <br />
          <input type="submit" value="Change" />
        </form>
      </div>
    </div>
  )
}

export default ResetPassword