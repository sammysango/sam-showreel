import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import img1 from "../../assets/placeholder1.webp";
import img2 from "../../assets/placeholder2.webp";
import img3 from "../../assets/placeholder3.webp";

const slideImages = [img1, img2, img3];

const arrowSVG = `
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.692 27.334" fill="currentColor">
  <path d="M2,27.334c-.512,0-1.024-.195-1.414-.586-.781-.781-.781-2.047,0-2.828l10.277-10.277L.586,3.365c-.781-.781-.781-2.047,0-2.828C1.367-.245,2.633-.245,3.414.537l11.692,11.691c.375.375.586.884.586,1.414s-.211,1.039-.586,1.414L3.414,26.748c-.39.391-.902.586-1.414.586Z"/>
</svg>`;

const SideSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      {slideImages.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className={styles.controls}>
        <button
          className={styles.prev}
          onClick={() =>
            setCurrentSlide(
              (currentSlide - 1 + slideImages.length) % slideImages.length,
            )
          }
          dangerouslySetInnerHTML={{ __html: arrowSVG }}
          style={{ transform: "rotate(180deg)" }}
        />
        <div className={styles.dots}>
          {slideImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button
          className={styles.next}
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % slideImages.length)
          }
          dangerouslySetInnerHTML={{ __html: arrowSVG }}
        />
      </div>
    </div>
  );
};

export default SideSlideshow;
