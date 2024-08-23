import React from "react";

export default function Work({ handleClick, checkHamburger }) {
  return (
    <section className={`work ${checkHamburger}`}>
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
        <div className="scroll-section">
          <div className="work-section">
            <div className="title">
              <h1>Latest Works</h1>
            </div>
            <div className="project-section">
              <div className="project-box newStyle">
                <div className="grey-bg">
                  <div className="project-info">
                    <div className="project-details">
                      Client: Nike Year: 2017 Type: Ecommerce
                    </div>
                    <div className="project-title">The Last Yeezys</div>
                    <i
                      className="fa fa-long-arrow-right"
                      axis-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
