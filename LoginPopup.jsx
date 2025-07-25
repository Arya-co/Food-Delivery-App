import React,{useState} from "react";
import './LoginPopup.css'
import {assets} from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

  const [currState,setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="Login-popup-inputs">
        {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />

        

        </div>
        <button>{currState==="Sign UP" ?"Create Accout":"Login"}</button>
        <div className="Login-PopUP-Condition">
          <input type="cheakbox" />
          <p>I will agree all terms and policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("SignUp")}>Click here</span></p>
        :<p>Already have an account? <span  onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
      </form>
    </div>
  );
};

export default LoginPopup;
