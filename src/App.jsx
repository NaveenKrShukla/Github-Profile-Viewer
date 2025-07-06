import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Set default based on system preference
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Router>
      <div className={`app-wrapper ${darkMode ? "dark" : "light"}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
