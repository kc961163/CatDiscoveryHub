import React from "react";
import "./Startup.css";

function Startup({ onSelectCategory }) {
  return (
    <div className="startup-container">
      <h1>Welcome to the Discovery App!</h1>
      <p>Select a category to explore:</p>
      <div className="category-buttons">
        <button className="category-button" onClick={() => onSelectCategory("cats")}>
          Cats
        </button>
        <button className="category-button" onClick={() => onSelectCategory("dogs")}>
          Dogs
        </button>
        <button className="category-button" onClick={() => onSelectCategory("universe")}>
          Universe
        </button>
      </div>
    </div>
  );
}

export default Startup;