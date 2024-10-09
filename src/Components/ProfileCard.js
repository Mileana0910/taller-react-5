import React from "react";
import "../Styles/ProfileCard.css";
import img from "../Assets/Milena.jpg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img className="profile-img" src={img} alt="Profile " />
      <h2 className="profile-name">Milena Vásquez</h2>
      <p className="profile-description">
        Desarrollo Web FrontEnd React & Redux
      </p>
    </div>
  );
};
export default ProfileCard;
