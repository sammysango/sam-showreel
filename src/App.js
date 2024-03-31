import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";

const App = () => {
  const { theme, colorScheme } = useTheme();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-color-scheme", colorScheme);
  }, [theme, colorScheme]);

  return (
    <div data-theme={theme} data-color-scheme={colorScheme}>
      <Router basename={window.location.pathname}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
