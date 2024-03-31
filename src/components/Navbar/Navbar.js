import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import styles from "./styles.module.css";
import { ReactComponent as EmailIcon } from "../../assets/emailIcon.svg";
import { ReactComponent as MoonIcon } from "../../assets/moonIcon.svg";
import { ReactComponent as PaintIcon } from "../../assets/paintIcon.svg";
import { ReactComponent as PaintIconAnim } from "../../assets/paintIconAnim.svg";
import { ReactComponent as SunIcon } from "../../assets/sunIcon.svg";

const Navbar = () => {
  const { theme, toggleTheme, nextColorScheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
        <button className={styles.navbarIcon}>
          <EmailIcon />
        </button>
        <button className={styles.navbarIcon} onClick={nextColorScheme}>
          <div className={styles.iconContainer}>
            <PaintIcon className={styles.staticIcon} />
            <PaintIconAnim className={styles.animatedIcon} />
          </div>
        </button>
        <button
          className={`${styles.navbarIcon} ${styles.toggleTheme}`}
          onClick={toggleTheme}
        >
          <MoonIcon
            className={`${styles.icon} ${theme === "dark" ? styles.iconHide : ""}`}
          />
          <SunIcon
            className={`${styles.icon} ${theme === "light" ? styles.iconHide : ""}`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
