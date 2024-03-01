import React from "react";
import "./Info.scss";
// ICONS
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Info = () => {
  return (
    <div className="footer-info-container">
      <h2>Znajdź nas!</h2>
      <div className="footer-info-icon">
        <LocationOnOutlinedIcon />
        <p>Wroclaw, Polska</p>
      </div>
      <div className="footer-info-icon">
        <PhoneAndroidOutlinedIcon />
        <p>571 865 473</p>
      </div>
      <div className="footer-info-icon">
        <EmailOutlinedIcon />
        <p>mckwak@gmail.com</p>
      </div>
    </div>
  );
};

export default Info;
