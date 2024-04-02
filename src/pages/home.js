import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="module feature">Featured Work Stream</div>
      <div className="module banner">Banner</div>
      <div className="module sideModule">Side Module</div>
      <div className="modulesUnderBanner">
        <div className="module module1">Module 1</div>
        <div className="module module2">Module 2</div>
      </div>
      <div className="module module3">Module 3</div> {/* New Module 3 */}
    </div>
  );
};

export default HomePage;
