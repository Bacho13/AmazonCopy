import React from "react";
import styles from "../../styles/components/navbarComponents/UnderNav.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
function UnderNav() {
  const categories = useSelector((state) => state.categories.categories);

  console.log(categories);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.burgerButton}>
          <MenuIcon />
          <p>All</p>
        </div>
        <ul>
          {categories.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default UnderNav;
