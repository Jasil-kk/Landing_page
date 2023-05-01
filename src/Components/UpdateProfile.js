import axios from "axios";
import React, { useState } from "react";
import { BaseUrl } from "../AxiosApi";

const UpdateProfile = ({ config, userDetails, setIsOpen }) => {
  const [data, setData] = useState({});
  console.log(userDetails);
  const handleUpdate = (e) => {
    e.preventDefault()
    axios
      .put(`${BaseUrl}/account/details/${userDetails.id}/`,data,config)
      .then((response) => {
        console.log(response);
        setIsOpen(false)
      });
  };


  return (
    <div className="updateProfile-main">
      <div className="updateProfile-section">
        <form action="" onSubmit={handleUpdate}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            defaultValue={userDetails.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            defaultValue={userDetails.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input type="submit" value="Update" />
        </form>
      </div>
     <div onClick={() => setIsOpen(false)} className="background"></div> 
    </div>
  );
};

export default UpdateProfile;
