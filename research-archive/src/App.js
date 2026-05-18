import React from "react";
import "./App.css";
import { Search } from "lucide-react";

function App() {
  return (
    <div className="container">
      <div className="overlay">

        {/* Top Navigation */}
        <div className="top-left">
          <button className="nav-btn">✩ My Profile</button>
          <button className="nav-btn">✩ My Library</button>
        </div>

        {/* Logo */}
        <div className="logo-box">
          <img
            src="research-archive/src/components/Logo.svg"
            alt="logo"
            className="logo"
          />
        </div>

        {/* Title */}
        <div className="title-box">
          <h1>ACADEXIA</h1>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <Search className="search-icon" size={28} />

          <input
            type="text"
            placeholder="Search my library..."
            className="search-input"
          />
        </div>

        {/* Subtitle */}
        <div className="subtitle-box">
          <p>
            Elevating the pursuit of truth into the
            <br />
            practice of wisdom.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
