import React from 'react';

const TestimonalItem = (props) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-image">
        <img src={props.resim} alt="/" />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-comment">"{props.mesaj}"</p>
        <h6 className="testimonial-name">
          {props.isim}, <span className="testimonial-job">{props.unvan}</span>
        </h6>
      </div>
    </div>
  );
};

export default TestimonalItem;
