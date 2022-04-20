import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Footer from "./Components/footer";
import Place1 from "./Components/Destinations/Place1";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import Blogs from "./Components/Guides";
import ScrollToTop from "./Components/ScrollToTop";
import SignupFormGuide from "./Components/SignupFormGuide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* This is for the routing of the multi-page setup */}
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider mode={mode} />{" "}
                </>
              }
            />
          </Routes>
          {/* <Routes>
          <Route path="/about" element={<><About mode={mode} toggleMode={toggleMode}/> </>} />
        </Routes> */}
          <Routes>
            <Route
              path="/blogs"
              element={
                <>
                  <Blogs mode={mode} toggleMode={toggleMode} />{" "}
                </>
              }
            />
          </Routes>
          {/*   <Routes>
            <Route path="/contact" element={<ContactUS mode={mode} toggleMode={toggleMode}/> } />
          </Routes> */}
          <Routes></Routes>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
          <Routes>
            <Route path="/signupguide" element={<SignupFormGuide />} />
          </Routes>
          <Routes>
            <Route
              path="/signup"
              element={<SignupForm mode={mode} toggleMode={toggleMode} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/place1"
              element={<Place1 mode={mode} toggleMode={toggleMode} />}
            />
          </Routes>
          {/* 
        <Routes>
          <Route path="/place1" element={ <Place1 mode={mode} toggleMode={toggleMode}/> } />
        </Routes>
        <Routes>
          <Route path="/place2" element={ <Place2 mode={mode} toggleMode={toggleMode}/> } />
        </Routes>
        <Routes>
          <Route path="/place3" element={ <Place3 mode={mode} toggleMode={toggleMode}/> } />
        </Routes>
        <Routes>
          <Route path="/place4" element={ <Place4 mode={mode} toggleMode={toggleMode}/> } />
        </Routes>
        <Routes>
          <Route path="/place5" element={ <Place5 mode={mode} toggleMode={toggleMode}/> } />
        </Routes> */}
        </ScrollToTop>
        <Footer mode={mode} toggleMode={toggleMode} />
      </Router>
    </>
  );
}

export default App;

// #39424e
