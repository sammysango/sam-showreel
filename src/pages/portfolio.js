import React from "react";
import "./portfolio.css";
import PortfolioBanner from "../components/PortfolioBanner/PortfolioBanner";

const HomePage = () => {
  return (
    <div>
      <div className="bannerContainer">
        <PortfolioBanner />
      </div>
      <div className="videoContainer">
        <div className="videoSection">
          <h2 className="videoTitle">Showreel (Old)</h2>
          <iframe 
            src="https://www.youtube.com/embed/3gByrDDECIw?si=ctFInJrkZHrL5LDT" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Showreel (old)"></iframe>
        </div>
        <div className="videoSection">
          <h2 className="videoTitle">VillageDAO Promo</h2>
          <iframe 
            src="https://uploads-ssl.webflow.com/63f4c441a7d0d23eca81d46f/64ba4f0525caeeaf18dc57b2_VillageDAO_V3%20(no%20end%20card)-transcode.mp4" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="VillageDAO promo"></iframe>
        </div>
        <div className="videoSection">
          <h2 className="videoTitle">Linea Walkthrough</h2>
          <iframe 
            src="https://www.youtube.com/embed/qH5xRiXSMSg?si=ExzzS5MGT2OjZ5kp" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Linea walkthrough"></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
