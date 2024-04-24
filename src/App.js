import React, { useEffect } from "react";
import "./css/style.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ArtworkPage from "./pages/artwork";
import ContactPage from "./pages/contact";

const App = () => {
  const { theme, colorScheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-color-scheme", colorScheme);
  }, [theme, colorScheme]);

  return (
    <div data-theme={theme} data-color-scheme={colorScheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/artwork" element={<ArtworkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
