import React from "react";
import styles from "../../styles/components/navbarComponents/RegionButton.module.scss";

function RegionButton({ icon, firstLine, secondLine, handleClick }) {
  return (
    <>
      <div className={styles.regionButton} onClick={handleClick}>
        <div className={styles.leftSide}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.firstLine}>{firstLine}</p>
          <p className={styles.secondLine}>{secondLine}</p>
        </div>
      </div>
    </>
  );
}

export default RegionButton;
