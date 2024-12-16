import React, { useState } from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  
  const [email, setEmail] = useState('john@mail.com');
  const [password, setPassword] = useState('changeme');
  
   const navigate = useNavigate();
   
   const show=()=>{
    let password = document.getElementById("Showpassword");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
   }

 const login =()=>{
 
  const result ={
    email:email,
    password:password
  }
  axios.post('https://api.escuelajs.co/api/v1/auth/login',result)
  .then((res)=>{
    
    if(res.data.access_token) {
      localStorage.setItem('token', JSON.stringify(res.data.access_token))
      navigate("/Userdetail")
    } else {
       alert("please enter the Correct details")
    }
    
    // alert("login successfull")
    
    
  }).catch((err)=>{
    alert("Loggined failed")
    console.log('Logined failed',err);
  })
  
 
              
 }
 
 


  return (
    <div className="m1">
      <div className="signIn">
        <h4>Login</h4>
        <input
          type="text"
          className="user"
          name=""
          placeholder="Username"
          id=""  
          value={email}        
          onChange={(e)=>setEmail(e.target.value)}
        />
        
        <input
          type="password"
          className="user"
          name=""          
          placeholder="password"
          id="Showpassword"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />

        <div className="bottom">

          <div className="show">
            <input type="checkbox" name="" onClick={show} />
           <label htmlFor="">&nbsp; Show password</label>
          </div>

          <div className="forgot">
          <NavLink to={`/forgot`}>
          <label htmlFor="" >
              Forgot password
            </label>
          </NavLink>
            
          </div>

        </div>

       <div className="login">
               
       <button type="button" onClick={login} >Login</button>
           
       </div>

       <div className="footer">
        <label htmlFor="">Don't have an account ?</label><button>Register</button>
       </div>

      </div>
    </div>
  );
}

export default Login;
