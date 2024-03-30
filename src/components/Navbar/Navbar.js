import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext"; // Adjust the path as necessary
import styles from "./styles.module.css";

const Navbar = () => {
  const { toggleTheme, nextColorScheme } = useTheme(); // Use the useTheme hook to get the toggleTheme function

  return (
    <nav className={styles.navbar}>
      <span className={styles.brandName}>Sam Sanger</span>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/about">
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className={styles.actionButton}>Button</button>
        <div className={styles.placeholder}></div>
        <button onClick={nextColorScheme}>Next Color Scheme</button>
        <button className={styles.actionButton} onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
