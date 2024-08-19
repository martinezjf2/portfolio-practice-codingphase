import React from "react";

export default function Resume() {
  return (
    <section className="resume">
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
        <div className="scroll-section">
          <div className="main-category">
            <div className="title">
              <h1>Education</h1>
            </div>
            <div className="xp-section">
              <div className="xp-box">
                <h5>Masters of Computer Science in Web Development</h5>
                <p>New York University, NY</p>
                <p>Session: 2012 -2014</p>
              </div>
              <div className="xp-box">
                <h5>Title</h5>
                <p>New York University</p>
                <p>New York University</p>
              </div>
              <div className="xp-box">
                <h5>Title</h5>
                <p>New York University</p>
                <p>New York University</p>
              </div>
              <div className="xp-box">
                <h5>Title</h5>
                <p>New York University</p>
                <p>New York University</p>
              </div>
            </div>
          </div>

          <div className="main-category">
            <div className="title">
              <h1>Work Experience</h1>
            </div>
            <div className="xp-section">
              <div className="xp-box">
                <h5>Masters of Computer Science in Web Development</h5>
                <p>New York University, NY</p>
                <p>Session: 2012 -2014</p>
              </div>
              <div className="xp-box">
                <h5>Title</h5>
                <p>New York University</p>
                <p>New York University</p>
              </div>
              <div className="xp-box">
                <h5>Title</h5>
                <p>New York University</p>
                <p>New York University</p>
              </div>
              <div className="xp-box">
                <h5>Title</h5>
                <p>New York University</p>
                <p>New York University</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
