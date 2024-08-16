import React from "react";

export default function Home() {
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
            <a href="" className="primary-btn">
              Portfolio
            </a>
            <a href="./resume" className="ghost-btn">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Info Area */}
      <section className="info-section">
        <div className="logo">JEFFREY</div>
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
    </section>
  );
}
