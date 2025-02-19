import React from 'react';

const ContactItem = (props) => {
  return (
    <div className="info-box">
      <div className="item-icon">
        <img src={props.resim} alt="/" />
      </div>
      <div className="info-text">
        <h5 className=" mb-0">{props.baslik}</h5>
        <small>{props.aciklama}</small>
      </div>
    </div>
  );
};

export default ContactItem;
