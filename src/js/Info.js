import React from "react";

export default function Info() {
  return (
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
  );
}
