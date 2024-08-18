import React from "react";
import "../scss/main.scss";
import { Routes, Route } from 'react-router-dom';
import Home from "./containers/Home";
import Resume from "./containers/Resume";
import Work from "./containers/Work";
import Contact from "./containers/Contact";



export default function App() {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
}



