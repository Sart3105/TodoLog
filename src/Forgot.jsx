import React from 'react'
import './Forgot.css'
import { useNavigate } from 'react-router-dom'

function Forgot() {

  const navigate = useNavigate();

  const login=()=>{
    navigate("/")
  }
  return (
    <div className="m1">
      <div className="signIn">
        <h4>Update Password</h4>
        <input
          type="text"
          className="user"
          name=""
          placeholder="E-mail/Phone"
          id=""
        />
        <input
          type="password"
          className="user"
          name=""
          placeholder="Enter New password"
          id=""
        />
         <input
          type="password"
          className="user"
          name=""
          placeholder="Confirm password"
          id=""
        />
        

        {/* <div className="bottom">

          <div className="show">
            <input type="checkbox" name="" id="" />
           <label htmlFor="">&nbsp; Show password</label>
          </div>

          <div className="forgot">
            <label htmlFor="" >
              Forgot password
            </label>
          </div>

        </div> */}

       <div className="login">
        <button type="button">Submit</button>
       </div>

       <div className="footer">
        <button onClick={login}>Login</button>
       </div>

      </div>
    </div>
  )
}

export default Forgot