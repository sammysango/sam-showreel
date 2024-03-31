import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer>
      <p className={styles.disclaimer}>
        Copyright © {new Date().getFullYear()} Sam Sanger. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
