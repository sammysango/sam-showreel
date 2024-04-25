import React from "react";
import styles from "./styles.module.css";
import amazonLogo from "../../assets/logos/amazon.svg";
import bosonProtocolLogo from "../../assets/logos/bosonprotocol.svg";
import consensysLogo from "../../assets/logos/consensys.svg";
import glamourLogo from "../../assets/logos/glamour.svg";
import googleLogo from "../../assets/logos/google.svg";
import lgLogo from "../../assets/logos/lg.svg";
import lineaLogo from "../../assets/logos/linea.svg";
import metamaskLogo from "../../assets/logos/metamask.svg";

const logos = [
  amazonLogo,
  bosonProtocolLogo,
  consensysLogo,
  glamourLogo,
  googleLogo,
  lgLogo,
  lineaLogo,
  metamaskLogo,
  // Duplicates for clean loop
  amazonLogo,
  bosonProtocolLogo,
  consensysLogo,
  glamourLogo,
  googleLogo,
  lgLogo,
  lineaLogo,
  metamaskLogo,
];

const BrandScroll = () => {
  return (
    <div className={styles.brandScrollContainer}>
      <h2 className={styles.heading}>Worked with / work appeared on:</h2>
      <div className={styles.scrollContainer}>
        <div className={styles.logoScroll}>
          {logos.map((logo, index) => (
            <img
              src={logo}
              alt={`Logo ${(index % 8) + 1}`}
              className={styles[`logo${index % 8}`]}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandScroll;
