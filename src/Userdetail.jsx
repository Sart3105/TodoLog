import React, { useEffect, useState } from "react";
import "./Login.css";
import "./Userdetail.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Userdetail() {
    const [info, setinfo] = useState();

    
    
    const detail = () => {
        const user = JSON.parse(localStorage.getItem("token"));
      
        const header = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
      
        axios
          .get("https://api.escuelajs.co/api/v1/auth/profile", header)
          .then((res) => {
            setinfo(res.data)
            console.log(info);
          })
          .catch((err) => [console.log("No user Exits", err)]);
      }; 

      useEffect(() => {
       detail();
    }, []);

    const close=()=>{
        localStorage.removeItem('token')
        alert("logout Successfull")
    }

  return (
    <div className="m1">
      <div className="signIn">
        <h4>User Details</h4>
            
            <div className="info1">
            <div className="info">
            <img src={info?.avatar} alt="" />
                <p>Name: {info?.name} </p>
                <p>Id: {info?.id} </p>
                <p>Role: {info?.role} </p>
            </div>
            </div>

        <div className="login">

        <NavLink className="logbutton" to={"/"}>
          <button  onClick={close} type="button">
            Logout
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Userdetail;
