import React, { useState } from "react";
import "../scss/main.scss";
import { Routes, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Work from "./containers/Work";
import Contact from "./containers/Contact";



export default function App() {
  const [hamburgerButton, setHamburgerButton] = useState(false)
  console.log(hamburgerButton);
  
  
  const handleClick = (e) => {
    e.preventDefault()
    setHamburgerButton((hamburgerButton) => !hamburgerButton)
  }

  const checkHamburger = hamburgerButton ? "menu-active" : null

    return (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home handleClick={handleClick} checkHamburger={checkHamburger} />
          }
        />
        <Route
          path="/resume"
          element={
            <Resume handleClick={handleClick} checkHamburger={checkHamburger} />
          }
        />
        <Route
          path="/work"
          element={
            <Work handleClick={handleClick} checkHamburger={checkHamburger} />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              handleClick={handleClick}
              checkHamburger={checkHamburger}
            />
          }
        />
      </Routes>
    );
}



