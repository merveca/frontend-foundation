import React from 'react';

const SectionTitle = (props) => {
  return (
    <div className="title-box">
      <h6>{props.aciklama}</h6>
      <h3>{props.baslik}</h3>
      <span>{props.baslik}</span>
    </div>
  );
};

export default SectionTitle;
