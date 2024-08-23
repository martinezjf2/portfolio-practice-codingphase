import React from "react";

export default function Contact({ handleClick, checkHamburger }) {
  return (
    <section className={`contact ${checkHamburger}`}>
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
          <div className="form-section">
            <form action="/" method="POST">
              <h4>Send a Message</h4>
              <input type="text" name="name" required placeholder="Name" />
              <input type="email" name="email" required placeholder="Email" />
              <input type="text" name="budget" required placeholder="Budget" />
              <textarea
                name="message"
                rows={12}
                required
                placeholder="Message"
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <div className="contact-box">
              <h5>Phone</h5>
              <p>(452) 622 4378</p>
            </div>
            <div className="contact-box">
              <h5>Email</h5>
              <p>jane@gmail.com</p>
            </div>
            <div className="contact-box">
              <h5>Address</h5>
              <p>456 Grant Ave, Ridgewood New York, 11386</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
