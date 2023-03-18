import React, { useEffect, useState } from "react";
import styles from "../../styles/components/navbarComponents/Search.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = useSelector((state) => state.categories.categories);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      const dropdownMenu = document.getElementById("dropdown-menu");
      if (dropdownMenu && !dropdownMenu.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <main
        className={`${styles.main} ${
          isFocused ? styles.mainYellowOutline : ""
        }`}
      >
        <button
          className={styles.categories}
          onClick={() => setIsCategoriesOpen((prev) => !prev)}
        >
          <div>
            <p
              style={{
                whiteSpace: "nowrap",
                textTransform: "capitalize",
              }}
            >
              {selectedCategory}{" "}
            </p>
            <ArrowDropDownIcon
              style={{
                fill: "#565959",
                width: "15px",
              }}
            />
          </div>
        </button>
        {isCategoriesOpen && (
          <div className={styles.select} id="dropdown-menu">
            {categories
              ? categories.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item}
                      onClick={(e) => {
                        setSelectedCategory(e.target.value);
                        setIsCategoriesOpen(false);
                      }}
                    >
                      {item}
                    </option>
                  );
                })
              : "Loading"}
          </div>
        )}

        <input
          type="text"
          className={styles.searchInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className={styles.darkCover}></div>
        <button className={styles.searchIcon}>
          <SearchIcon />
        </button>
      </main>
    </>
  );
}

export default Search;
