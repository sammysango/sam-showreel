import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedinIcon.svg";
import { ReactComponent as InstaIcon } from "../../assets/instaIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/githubIcon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright © {new Date().getFullYear()} Sam Sanger. All rights reserved.
      </p>
      <div className={styles.iconContainer}>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className={styles.socialIcon} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaIcon className={styles.socialIcon} />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className={styles.socialIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
