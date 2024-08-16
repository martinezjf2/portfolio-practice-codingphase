// import { createRoot } from "react-dom/client";
import '../scss/main.scss';
// import App from './App.js';

// const appDiv = document.getElementById("app");
// const root = createRoot(appDiv);
// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App.js";

const appDiv = document.getElementById("app");
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>, appDiv);
