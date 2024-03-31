import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the Home Page. Add your content here.</p>
      {/* Add placeholder content to allow for scrolling */}
      {Array.from({ length: 50 }, (_, index) => (
        <p key={index}>
          Placeholder content paragraph {index + 1}. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      ))}
    </div>
  );
};

export default HomePage;
