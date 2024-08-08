import React from "react";

export default function Content() {
  return (
    <section className="content-area">
      <div className="user-img"></div>
      <div className="profile">
        <h1>
          Jeffrey <br></br>Martinez
        </h1>
        <h5>Software Developer</h5>
        <p>
          Hi my name is Jeffrey Martinez and I am an experienced full stack
          developer from Farmingdale, New York graduating from Flatiron School
          and Bellevue University.
        </p>
        <div className="primary-btn">Portfolio</div>
        <div className="ghost-btn">Resume</div>
      </div>
    </section>
  );
}
