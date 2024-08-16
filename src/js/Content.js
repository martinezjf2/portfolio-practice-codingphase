import React from "react";

export default function Content() {
  return (
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
            developer from Farmingdale, New York graduating from Flatiron School
            and Bellevue University.
          </p>
          <a href="" className="primary-btn">Portfolio</a>
          <a href="" className="ghost-btn">Resume</a>
        </div>
      </div>
    </section>
  );
}
