import React from 'react';

const Banner = () => {
  return (
    <section className="hero-02 full-screen py-6" id="hero">
      <div className="hero-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <div className="hero-img">
                  <img src="assets/img/man-avator.png" alt="" />
                </div>
                <h3 className="mb-0 mt-3">I'M John Doe</h3>
                <h1 className="text-capitalize mb-3">
                  <span className="base-color">A </span>{" "}
                  <span
                    className="element"
                    data-elements="UI Designer.,Web Designer.,Web Developer."
                  ></span>
                </h1>
                <a href="#" className="pill-button-01">
                  Download Cv
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <a href="#about">
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
