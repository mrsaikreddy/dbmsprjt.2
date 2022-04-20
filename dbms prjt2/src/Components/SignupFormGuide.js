import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';
import React, { Component }  from 'react';

export default function SignupFormGuide(props) {
  const navigate = useNavigate(); // this is for redirection
    let myStyle = {  // this is for the dark mode toggle
        color: props.mode === "dark" ? "white" : "#212529",
        backgroundColor: props.mode === "dark" ? "#212529" : "white",
      };
      let boxStyle = {
        color: props.mode === "dark" ? "white" : "#212529",
        backgroundColor: props.mode === "dark" ? "#212529" : "white",
        border: props.mode === "dark" ? "1px solid #445" : "1px solid rgb(173,173,181)",
      }
      // these are for storing and updation of values entered
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contactno, setContactNo] = useState("");
    const [aadharno, setaadharno] = useState("");
    const [location, setlocation] = useState("");

    const handleOnSubmit = async (e) => { // this is for sending data to the database
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, password,contactno }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setName("");
            setEmail("");
            setPassword("");
            setContactNo("");
            navigate("/login"); // this will redirect to the login page
        }
    }
  return (
    <>
    {/* This is main code of the login page */}
      <div className="main">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form action="" style={myStyle} id="sgnForm">
          <h3 style={myStyle}>Sign Up Here </h3>
          <label className="SUlabel" htmlFor="username" style={myStyle}>
            Name
          </label>
          <input
            type="text"
            style={boxStyle}
            placeholder="Name" 
            id="username" className="sgnInpt"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="SUlabel" htmlFor="email" required style={myStyle}>
            Email
          </label>
          <input
            type="email"
            style={boxStyle}
            placeholder="Email" className="sgnInpt" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="SUlabel" htmlFor="password" required style={myStyle}>
            Password
          </label>
          <input
            type="password"
            style={boxStyle}
            placeholder="Password" className="sgnInpt"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className='SUlabel' htmlFor="aadharno" required style={myStyle}>
            Aadhaar Number
          </label>
          <input
            type="text"
            style={boxStyle}
            placeholder="Aadhar No" className="sgnInpt"
            id="aadharno"
            value={aadharno}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <label className='SUlabel' htmlFor="location" required style={myStyle}>
            Location
          </label>
          <input
            type="text"
            style={boxStyle}
            placeholder="Location" className="sgnInpt"
            id="location"
            value={location}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <label className="SUlabel" htmlFor="contact" required style={myStyle}>
            Contact No.
          </label>
          <input
            type="text"
            style={boxStyle}
            placeholder="Contact No." className="sgnInpt"
            id="contactno"
            value={contactno}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <button type="submit" id="sub" onClick={handleOnSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

// #334
