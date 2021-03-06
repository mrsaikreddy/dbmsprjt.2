import { useState } from "react";
import './Login.css';
import './Navbar.js';
import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function LoginForm() {
  const navigate = useNavigate();
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      alert("Logged in successfully");
      document.getElementById('lgnNav').style.display='none';
      document.getElementById('lgoutNav').style.display="block";
      document.getElementById('navBut').style.display='none';
      navigate("/");

      
      document.getElementById('lgoutNav').addEventListener('click',()=>{
        let a=window.confirm(`Do you really want to logout? :( `);
        
        if(a){
        document.getElementById('lgnNav').style.display="block";
        document.getElementById('navBut').style.display='block';
        document.getElementById('lgoutNav').style.display="none";
        }

      })


      setLoginEmail("");
      setLoginPassword("");
    }
  };
  return (
    <>
      <div className="login-box">
        <h2 id="loginTxt">Login</h2>
        <form action="" id='lgnForm'>
          <div className="user-box">
            <input
              type="email" className="lgnInpt"
              value={email} name="" required=""
              onChange={(e) => setLoginEmail(e.target.value)}
            />
              <label className="loginLab">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password" name=""
              value={password} className="lgnInpt" required=""
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <label className="loginLab">Password</label>
          </div>
          <a href="#" id='lgnLink' onClick={login}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </>
  );
}

export default LoginForm;