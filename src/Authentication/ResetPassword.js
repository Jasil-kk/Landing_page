import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BaseUrl } from '../AxiosApi';

const ResetPassword = () => {
  const [data,setData] = useState({});
const navigate = useNavigate();
  const params = useParams();
  const tokens =  params.token;
  useEffect(() => {
    setData({ ...data, token: tokens });
  }, [tokens]);

  const handleSubmit= (e)=>{
    e.preventDefault()
     axios.post(`${BaseUrl}/account/confirmpassword/`,data).then((response)=>{
      console.log(response);
      navigate("/login")
    })
  }
  console.log(data);
  return (
    <div className="auth-main">
        <div className="auth-component">
        <h1>Reset Password</h1>
        <form action="" onSubmit={handleSubmit}>
          <label >Password</label>
          <input type="password"  autoComplete="off" onChange={(e)=>setData({...data,password:e.target.value})}/> <br />
          <label >Confirm Password</label>
          <input type="password"  autoComplete="off" onChange={(e)=>setData({...data,confirm_password:e.target.value})}/>
          <input type="submit" value="Change" />
          
        </form>
      </div>
    </div>
  )
}

export default ResetPassword