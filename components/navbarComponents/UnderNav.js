import React, { useEffect, useState } from "react";
import styles from "../../styles/components/navbarComponents/UnderNav.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
function UnderNav() {
  const categories = useSelector((state) => state.categories.categories);
  const [data, setData] = useState([]);
  const [isSlideMenuOn, setIsSlideMenuOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categories) {
      setData(categories);
      setIsLoading(false);
    }
  }, [categories]);

  return (
    <>
      <div className={styles.main}>
        <div
          className={styles.burgerButton}
          onClick={() => setIsSlideMenuOn((prev) => !prev)}
        >
          <MenuIcon />
          <p>All</p>
        </div>
        <ul>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          )}
        </ul>
        <div
          className={isSlideMenuOn ? styles.slideMenu : styles.slideMenuOff}
        ></div>
      </div>
    </>
  );
}

export default UnderNav;
