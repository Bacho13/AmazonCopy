import { FlagCircleOutlined } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/components/navbarComponents/RightSideOfTheNav.module.scss";
import flag from "../../public/us.png";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import AccountAndList from "./AccountAndList";
import ReturnAndOrder from "./ReturnAndOrder";
import Cart from "./Cart";

function RightSideOfTheNav() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isParentHovered, setIsParentHovered] = useState(false);
  const [isHiddenHovered, setIsHiddenHovered] = useState(false);

  const handleSelectionChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <div className={styles.main}>
        <div
          className={styles.lang}
          onMouseEnter={() => setIsParentHovered(true)}
          onMouseLeave={() => setIsParentHovered(false)}
        >
          <Image src={flag} width="20" alt="flad pic" />
          <p>{selectedLanguage === "english" ? "EN" : "ES"}</p>
          <ArrowDropDownSharpIcon className={styles.arrow} />
        </div>
        <div
          className={
            isParentHovered || isHiddenHovered
              ? `${styles.hiddenContent}`
              : styles.hiddenContentOff
          }
          onMouseEnter={() => setIsHiddenHovered(true)}
          onMouseLeave={() => setIsHiddenHovered(false)}
        >
          <div className={styles.rectangle}></div>
          <div className={styles.select}>
            <label
              htmlFor="english"
              style={{ borderBottom: "1px solid #d8d6d6" }}
            >
              <input
                className={
                  selectedLanguage === "english"
                    ? styles.selectedInput
                    : styles.radioInput
                }
                type="radio"
                id="english"
                name="language"
                value="english"
                checked={selectedLanguage === "english"}
                onChange={handleSelectionChange}
                // style={{
                //   backgroundColor: `${
                //     selectedLanguage === "english" ? "#f19d38" : ""
                //   }`,
                // }}
              />
              English - EN
            </label>
            <label htmlFor="espanol">
              <input
                className={
                  selectedLanguage === "english"
                    ? styles.radioInput
                    : styles.selectedInput
                }
                type="radio"
                id="espanol"
                name="language"
                value="espanol"
                checked={selectedLanguage === "espanol"}
                onChange={handleSelectionChange}
              />
              Español - ES
            </label>
            <p
              className={styles.learnMore}
              style={{ borderBottom: "1px solid #d8d6d6" }}
            >
              Learn more
            </p>
          </div>
          <p className={styles.changeCountry}>Change country/region</p>
        </div>
        <div
          className={
            isParentHovered || isHiddenHovered
              ? `${styles.dark}`
              : styles.darkOff
          }
          //   className={styles.dark}
        ></div>

        <AccountAndList />
        <ReturnAndOrder />
        <Cart />
      </div>
    </>
  );
}

export default RightSideOfTheNav;
