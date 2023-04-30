import React, { useEffect, useRef, useState } from "react";
import user from "../Assets/user .png";
import axios from "axios";
import { BaseUrl } from "../AxiosApi";
import UpdateProfile from "./UpdateProfile";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState();
  const [userDetails, setUserDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const config = {
    headers: { Authorization: `token ${token}` },
  };

  useEffect(() => {
    axios.get(`${BaseUrl}/account/details/`, config).then((response) => {
      console.log(response.data);
      setDetails(response?.data);
    });
  }, []);
  const handleLogout = () => {
    // axios.get(`${BaseUrl}`, config).then((response) => {
      // console.log(response);
      localStorage.removeItem("token")
      navigate("/")
    // });
  }
  const handleDelete = (id) => {
    axios.delete(`${BaseUrl}/account/details/${id}/`, config).then((response) => {
      console.log(response);
      localStorage.removeItem("token")
      navigate("/")
    });
  }
  return (
    <> 
    <header>
      <h1 className="heading">NorthStar</h1>
      <div onClick={() => setShow(true)} className="header-user">
        <img src={user} alt="user" />
      </div>
      {show && (
        <div ref={profileRef} className="profile">
          <p className="hello">Hello ,</p>
          {details.map((detail) => (
            <div key={detail.id}>
              <h3 className="name">{detail.username}</h3>
              <h4 className="email"><span>email : </span>{detail.email}</h4>
           <button onClick={()=>{setIsOpen(true);setUserDetails({...userDetails,id:detail.id,username:detail.username,email:detail.email})}} className="profileBtn profileUpdate">Update Profile</button>
          <button onClick={()=>handleDelete(detail.id)} className="profileBtn profileDelete">Delete Profile</button>
          <button onClick={handleLogout} className="profileBtn profileLogout">Logout</button>
          </div>
            ))}
        </div>
        
      )}
    </header>
    {isOpen && <UpdateProfile config={config} userDetails={userDetails} setIsOpen={setIsOpen}/>}</>
  );
};

export default Header;
