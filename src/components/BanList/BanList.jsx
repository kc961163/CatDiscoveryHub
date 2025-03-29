// src/components/BanList/BanList.jsx
import React from "react";
import "./BanList.css";

function BanList({ banList, onToggleBan }) {
  return (
    <div className="ban-list-container">
      <h2>Ban List</h2>
      {Object.keys(banList).map((type) => (
        <div key={type} className="ban-type">
          <h4>{type}:</h4>
          {banList[type].length > 0 ? (
            banList[type].map((value, index) => (
              <button
                key={index}
                className="ban-item-button"
                onClick={() => onToggleBan(type, value)}
              >
                {value}
              </button>
            ))
          ) : (
            <p>None</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default BanList;