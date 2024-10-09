import React from "react";
import styles from "../Styles/Card.module.css";
import img from "../Assets/Milena.jpg";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.container}>
        <img className={styles.img} src={img} alt="Profile " />
        <h2 className={styles.title}>Milena Vásquez</h2>
        <p className={styles.description}>Desarrollo Web FrontEnd React & Redux</p>
        <button className={styles.button}>Registrar</button>
      </div>
    </div>
  );
};

export default Card;
