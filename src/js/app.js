import React from "react";
import Content from "./Content";
import Info from "./Info";

export default function App() {
    return (
      <section className="home">
        <div className="menu-icon">
          <i class="fa-solid fa-bars fa"></i>
          {/* <i class="fa-regular fa-circle-xmark fa"></i> */}
        </div>
        <section id="menu">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </nav>
        </section>
        <Info />
        <Content />
      </section>
    );
}



