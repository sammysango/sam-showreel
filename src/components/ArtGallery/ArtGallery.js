import React, { useState } from "react";
import styles from "./styles.module.css";

// Importing images directly, not ideal but sidesteps a bug for now
import image1 from "../../assets/gallery-images/1.jpg";
import image2 from "../../assets/gallery-images/2.jpg";
import image3 from "../../assets/gallery-images/3.jpg";
import image4 from "../../assets/gallery-images/4.jpg";
import image5 from "../../assets/gallery-images/5.jpg";
import image6 from "../../assets/gallery-images/6.jpg";
import image7 from "../../assets/gallery-images/7.jpg";
// import image8 from "../../assets/gallery-images/8.jpg";
import image9 from "../../assets/gallery-images/9.jpg";
import image10 from "../../assets/gallery-images/10.jpg";
import image11 from "../../assets/gallery-images/11.jpg";
import image12 from "../../assets/gallery-images/12.jpg";
import image13 from "../../assets/gallery-images/13.jpg";
import image14 from "../../assets/gallery-images/14.jpg";
import image15 from "../../assets/gallery-images/15.jpg";
import image16 from "../../assets/gallery-images/16.jpg";
import image17 from "../../assets/gallery-images/17.jpg";
import image18 from "../../assets/gallery-images/18.jpg";
import image19 from "../../assets/gallery-images/19.jpg";
import image20 from "../../assets/gallery-images/20.jpg";
import image21 from "../../assets/gallery-images/21.jpg";
import image22 from "../../assets/gallery-images/22.jpg";
import image23 from "../../assets/gallery-images/23.jpg";
import image24 from "../../assets/gallery-images/24.jpg";
import image25 from "../../assets/gallery-images/25.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  //  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
];

const ArtGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImgClick = (img) => {
    setSelectedImg(img);
  };

  const closeZoom = () => {
    setSelectedImg(null);
  };

  return (
    <div className={styles.container}>
      {selectedImg && (
        <div className={styles.zoomedImgWrapper} onClick={closeZoom}>
          <img src={selectedImg} alt="Zoomed" className={styles.zoomedImg} />
        </div>
      )}
      <div className={styles.grid}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Artwork ${index + 1}`}
            className={`${styles.image} ${selectedImg === img ? styles.selectedImage : ""}`}
            onClick={() => handleImgClick(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
