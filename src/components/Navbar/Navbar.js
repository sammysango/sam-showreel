import React, { useState, useEffect, useRef } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Automatically close hamburger menu on window resize if above breakpoint
      }
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.active : ""}`}
      ref={navRef}
    >
      {/* Hamburger menu icon with SVG directly embedded for animation */}
      <div
        className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 53.057 38.525"
          width="30"
          height="30"
        >
          <g
            className={`${styles.hamburgerTop} ${isMenuOpen ? styles.rotateToXTop : styles.rotateBackTop}`}
          >
            <rect
              x="0"
              y="0"
              width="53.057"
              height="3.491"
              rx="1.745"
              ry="1.745"
              fill="currentColor"
            />
          </g>
          <g
            className={`${styles.hamburgerMiddle} ${isMenuOpen ? styles.fadeOut : styles.fadeIn}`}
          >
            <rect
              x="0"
              y="17.017"
              width="53.057"
              height="3.491"
              rx="1.745"
              ry="1.745"
              fill="currentColor"
            />
          </g>
          <g
            className={`${styles.hamburgerBottom} ${isMenuOpen ? styles.rotateToXBottom : styles.rotateBackBottom}`}
          >
            <rect
              x="0"
              y="34.034"
              width="53.057"
              height="3.491"
              rx="1.745"
              ry="1.745"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
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
