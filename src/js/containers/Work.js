import React from "react";

export default function Work() {
  return (
    <section className="work">
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
    </section>
  );
}
