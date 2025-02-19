import moment from "moment";
import React from 'react';
import "./style.css";

const Clock2 = (props) => {
  const { yaziRengi, zeminRengi } = props;

  const zaman = moment();
  const saat = zaman.format("HH:mm");
  const tarih = zaman.format("LL");
  const gun = zaman.format("dddd");

  const hour = zaman.format("HH");
  let gunBolumu;
  if (hour >= 5 && hour < 12) {
    gunBolumu = "morning";
  } else if (hour >= 12 && hour < 17) {
    gunBolumu = "noon";
  } else if (hour >= 17 && hour < 22) {
    gunBolumu = "evening";
  } else if (hour >= 22 || hour < 5) {
    gunBolumu = "night";
  }

  return (
    <div
      className="clock-container"
      style={{ color: "yaziRengi", backgroundColor: "zeminRengi" }}
    >
      <div className="clock">{saat}</div>
      <div>
        <div className="date">{tarih}</div>
        <div className="day">{gun + " " + gunBolumu} </div>
      </div>
    </div>
  );
};

export default Clock2;
