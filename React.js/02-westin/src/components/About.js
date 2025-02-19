import React from 'react';

const About = () => {
  return (
    <section id="about" className=" about-02 py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image">
              <img src="assets/img/about-05.jpg.jfif" alt="/" />
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box text-left">
                  <h6>about me</h6>
                  <h3>
                    My mission is design develop the best Web sites around....
                  </h3>
                </div>
              </div>
            </div>
            <p className="about-text">
              Hello! I'm John Doe. Web designer from USA, California, San
              Francisco. I have rich experience in web site design and building,
              also I am good at wordpress. I love to talk with you about our
              unique.I help you build brand for your business
            </p>
            <a href="#contact" className="pill-button-01 to-contact">
              Hire Me
            </a>
            <div className="social-icon">
              <ul className="list-inline py-2 mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <img src="assets/img/facebook.svg" alt="/" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src="assets/img/twitter.svg" alt="/" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src="assets/img/github.svg" alt="/" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src="assets/img/linkedin.svg" alt="/" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src="assets/img/telegram.svg" alt="/" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
