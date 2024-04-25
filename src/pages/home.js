import React from "react";
import "./home.css";
import BannerComponent from "../components/HomeBanner/HomeBanner";
import SideSlideshow from "../components/SideSlideshow/SideSlideshow";
import BrandScroll from "../components/BrandScroll/BrandScroll";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="module feature">Side Module</div>
      <div className="module banner">
        <BannerComponent />
      </div>
      <div className="module sideModule">
        <SideSlideshow />
      </div>
      <div className="modulesUnderBanner">
        <div className="module module1">Module 1</div>
        <div className="module module2">Module 2</div>
      </div>
      <div className="module module3">Module 3</div>
      <div className="module bottomModule">
        <BrandScroll />
      </div>
    </div>
  );
};

export default HomePage;
