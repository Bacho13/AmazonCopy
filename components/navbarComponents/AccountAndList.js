import React from "react";
import styles from "../../styles/components/navbarComponents/AccountAndList.module.scss";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

function AccountAndList() {
  return (
    <>
      <div className={styles.main}>
        <p className={styles.firstLine}>Hello, Sign in</p>
        <div className={styles.secondLine}>
          <p>Account & Lists</p>
          <ArrowDropDownSharpIcon className={styles.arrow} />
        </div>
      </div>
    </>
  );
}

export default AccountAndList;
