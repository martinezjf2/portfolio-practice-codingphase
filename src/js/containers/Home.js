import React from "react";

export default function Home({handleClick, checkHamburger}) {
  return (
    <section className={`home ${checkHamburger}`} >
      <div className="menu-icon">
        <i class="fa-solid fa-bars fa" onClick={handleClick}></i>
        {/* <i class="fa-regular fa-circle-xmark fa"></i> */}
      </div>
      <section id="menu">
        <nav>
          <a href="/">Home</a>
          <a href="/resume">About</a>
          <a href="/work">Portfolio</a>
          <a href="/contact">Contact</a>
        </nav>
      </section>

      {/* Info Area */}
      <section className="info-section">
        <a href="/" className="logo">
          JEFFREY
        </a>

        <div className="info-box">
          <h4>Email</h4>
          <p>martinezjf2@gmail.com</p>
          <h4>Phone</h4>
          <p>123-456-7890</p>
          <h4>Find Me On</h4>
          <div className="icon-section">
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="content-area">
        <div className="img-container">
          <div className="user-img"></div>
        </div>
        <div className="profile-section">
          <div className="profile">
            <h1>
              Jeffrey <br></br>
              <span>Martinez</span>
            </h1>
            <h5>Software Developer</h5>
            <p>
              Hi my name is Jeffrey Martinez and I am an experienced full stack
              developer from Farmingdale, New York graduating from Flatiron
              School and Bellevue University.
            </p>
            <a href="/work" className="primary-btn">
              Portfolio
            </a>
            <a href="/resume" className="ghost-btn">
              Resume
            </a>
            <a href="/contact" className="contact-btn">
              Contact
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
