import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Light or dark
  const [colorScheme, setColorScheme] = useState(1); // Assuming 1-4 for simplicity

  const toggleTheme = () => {
    console.log("Toggling theme");
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const nextColorScheme = () => {
    console.log("Cycling color schemes");
    setColorScheme((current) => (current === 4 ? 1 : current + 1)); // Cycle through 1-4
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, colorScheme, nextColorScheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);
