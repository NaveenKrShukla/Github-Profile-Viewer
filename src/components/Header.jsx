import React from "react";
import { useNavigate } from "react-router-dom";
import githubLogo from "../assets/logo.jpg";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="header-left" onClick={() => navigate("/")}>
        <img src={githubLogo} alt="Logo" className="logo" />
        <h1 className="title">GitHub Profile Viewer</h1>
      </div>

      <div className="header-right">
        <a
          href="https://github.com/NaveenKrShukla"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Visit My GitHub
        </a>

        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
