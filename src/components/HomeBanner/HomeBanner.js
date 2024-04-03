import React from "react";
import styles from "./styles.module.css"; // Ensure the path is correct

const HomeBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Welcome to My Website</h2>
        <p className={styles.description}>
          This is a brief introduction or an engaging message for visitors.
        </p>
        {/* Add more text content as needed */}
      </div>
      <div className={styles.imageContent}>
        {/* Placeholder for an image. You can replace it with an actual <img> tag or another component */}
        <div className={styles.imagePlaceholder}>Image Placeholder</div>
      </div>
    </div>
  );
};

export default HomeBanner;
