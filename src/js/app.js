import React from "react";
import Content from "./Content";
import Info from "./Info";

export default function App() {
    return (
      <section className="home">
        <div className="hamburger-icon">
          <i class="fa-solid fa-bars"></i>
        </div>
        <Info />
        <Content />
      </section>
    );
}



