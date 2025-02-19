import React from 'react';
import "./wheather.css";
const Wheatherresult = ({ date, mintemp, maxtemp, condition, icon }) => {
  return (
    <div className="result">
      <h2> {date}</h2>
      <ul>
        <li>
          <img src={icon} alt="" />{" "}
        </li>
        <li>{condition}</li>
        <li>
          {mintemp} C / {maxtemp} C
        </li>
      </ul>
    </div>
  );
};
export default Wheatherresult;
