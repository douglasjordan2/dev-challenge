import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./reset.css";
import "./App.scss";

// components
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";

// pages
import Home from "./pages/Home";

function App() {
  const breakpoint = 750;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > breakpoint) {
        setIsMobile(false);
      }

      if (window.innerWidth <= breakpoint) {
        setIsMobile(true);
      }
    });
  }, [isMobile]);

  return (
    <Router>
      <Header isMobile={isMobile} />

      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
      </Routes>

      <Footer isMobile={isMobile} />
    </Router>
  );
}

export default App;
