import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/components/Navbar.module.scss";
import logo from "../public/logo.png";
import Link from "next/link";
import RegionButton from "./navbarComponents/RegionButton";
import Search from "./navbarComponents/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useSelector } from "react-redux";
import ChooseLocation from "./navbarComponents/ChooseLocation";
import RightSideOfTheNav from "./navbarComponents/RightSideOfTheNav";
import UnderNav from "./navbarComponents/UnderNav";

function Navbar() {
  const user = useSelector((state) => state.user);
  const [locationIsOpen, setLocationIsOpen] = useState(false);

  const handleLocationIsOpen = () => {
    setLocationIsOpen((prev) => !prev);
    console.log(locationIsOpen);
  };

  return (
    <>
      <div className={styles.main}>
        <Link rel="stylesheet" href="/" />
        <div className={styles.logo}>
          <Image className={styles.logoImage} src={logo} alt="logo" />
        </div>
        <RegionButton
          icon={<PlaceOutlinedIcon />}
          firstLine="Deliver to"
          secondLine={user.logIn ? "ქვეყანა" : user.guestLocation}
          handleClick={() => {
            handleLocationIsOpen();
          }}
        />
        {locationIsOpen && (
          <ChooseLocation
            handleClick={() => {
              handleLocationIsOpen();
            }}
          />
        )}
        <Search />
        <RightSideOfTheNav />
      </div>
      <UnderNav />
    </>
  );
}

export default Navbar;
