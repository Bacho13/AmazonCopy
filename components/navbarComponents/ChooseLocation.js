import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/components/navbarComponents/ChooseLocation.module.scss";
import { getGuestLocation } from "@/redux/userSlice";

function ChooseLocation({ handleClick }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState(null);
  const [countryFromOption, setCountryFromOption] = useState(null);

  const handleInput = (e) => {
    setZipCode(e.target.value);
  };

  const fetchCityUsingZip = (zip) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5bbfd94451msh4d01450a24678b9p1e8b1fjsnb274724e1273",
        "X-RapidAPI-Host": "us-zip-code-information.p.rapidapi.com",
      },
    };

    fetch(
      `https://us-zip-code-information.p.rapidapi.com/?zipcode=${zip}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response[2]) {
          setCity(response[0].City);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(getGuestLocation(city));
  }, [city]);
  useEffect(() => {
    dispatch(getGuestLocation(countryFromOption));
  }, [countryFromOption]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.window}>
          <header>
            <h1>Choose your location</h1>
          </header>
          <section className={styles.section}>
            <p>
              Delivery options and delivery speeds may vary for different
              locations
            </p>
            <button>Sign in to see your address</button>
            <div className={styles.lineContainer}>
              <p>or enter a US zip code</p>
              <div className={styles.line}></div>
            </div>
            <div className={styles.zipSection}>
              <input type="text" onChange={handleInput} />
              <button
                className={styles.zipButton}
                onClick={() => fetchCityUsingZip(zipCode)}
              >
                Apply
              </button>
            </div>
            <p style={{ color: "red" }}>
              {city !== null ? "" : "Please enter a valid US zip code"}
            </p>
            <div className={styles.lineContainer}>
              <p>or</p>
              <div className={styles.line}></div>
            </div>
            <select
              id="country"
              name="countries"
              className={styles.select}
              onChange={(event) => setCountryFromOption(event.target.value)}
            >
              <option value="Georgia">Georgia</option>
              <option value="Japan">Japan</option>
              <option value="England">England</option>
            </select>
          </section>
          <div className={styles.bottomSection}>
            <button className={styles.doneButton} onClick={handleClick}>
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseLocation;
