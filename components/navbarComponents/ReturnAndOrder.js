import React from "react";
import styles from "../../styles/components/navbarComponents/ReturnAndOrder.module.scss";

function ReturnAndOrder() {
  return (
    <>
      <div className={styles.main}>
        <p className={styles.firstLine}>Return</p>
        <div className={styles.secondLine}>
          <p>& Orders</p>
        </div>
      </div>
    </>
  );
}

export default ReturnAndOrder;
