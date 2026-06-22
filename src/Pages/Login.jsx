import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Login.css"
function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if(
    user &&
    email === user.email &&
    password === user.password
  ){
    alert("Login Successful");
    navigate("/Home");
  }
  else{
    alert("Invalid Email or Password");
  }
  
  };

  return (
    <div className='login-page-container'>
      <div className='login-card'>
      <h3>Please Login</h3>

      <div className='email-input'>
      <label>Email address</label>
      <input type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)} />
      </div>

      <div className='password-inputs'>      
      <label>Password</label>
      <input type="password"
      placeholder="Enter your password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      </div>

      <button onClick={handleLogin}>Login</button>
      <div className='login-footer'>
      <p>Dont have an account?</p>
      <Link to="/Register">Register</Link>
      </div>
      </div>

    
    </div>
  )
}

export default Login
