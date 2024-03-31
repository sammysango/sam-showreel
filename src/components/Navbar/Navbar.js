import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import styles from "./styles.module.css";

const Navbar = () => {
  const { toggleTheme, nextColorScheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if page is scrolled more than 50 pixels
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
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
        <button className={`${styles.actionButton} ${styles.roundedButton}`}>
          Placeholder
        </button>
        <button className={styles.placeholder}>✉️</button>
        <button className={styles.placeholder} onClick={nextColorScheme}>
          🎨
        </button>
        <button className={styles.placeholder} onClick={toggleTheme}>
          🌙
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
