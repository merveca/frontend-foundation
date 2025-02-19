import React from 'react';

const Preloader = () => {
  return (
    <div id="angela-preloader">
      <div className="preloader">
        <div className="spinner"></div>
        <div className="loader">
          <span data-text="W" className="letter-animation">
            W
          </span>
          <span data-text="E" className="letter-animation">
            E
          </span>
          <span data-text="S" className="letter-animation">
            S
          </span>
          <span data-text="T" className="letter-animation">
            T
          </span>
          <span data-text="I" className="letter-animation">
            I
          </span>
          <span data-text="N" className="letter-animation">
            N
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
