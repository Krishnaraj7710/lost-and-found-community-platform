import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Register.css";

function Register() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

  if(password !== confirmPassword){
    alert("Passwords do not match");
    return;
  }

  const user = {
    name,
    email,
    password
  };

  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );

  alert("Registration Successful");
  navigate("/login");
};

  return (
    <div className='register-container'>
      <div className='register-card'>
      <h3>Create Account</h3>

      <div className='Name-input'>
      <label>Name</label>
      <input placeholder="Enter your name"
      value={name}
      onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className='Email-input'>
      <label>Email</label>
      <input type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className='password-input'>
      <label>Password</label>
      <input type="password"
      placeholder='Enter your password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div className='confirm-input'>
      <label>Confirm Password</label>
      <input type="password"
      placeholder="Confirm your Password"
      value={confirmPassword}
      onChange={(e)=>setConfirmPassword(e.target.value)} />
      </div>
      <div className='card-footer'>
      <button onClick={handleRegister}>Register</button>
      
      </div>
      </div>

      
    </div>
  )
}

export default Register
