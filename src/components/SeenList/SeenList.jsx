// src/components/SeenList/SeenList.jsx
import React from "react";
import "./SeenList.css";

function SeenList({ seenItems }) {
  return (
    <div className="seen-list-container">
      <h2>Seen List</h2>
      {seenItems.length === 0 ? (
        <p>No items viewed yet.</p>
      ) : (
        seenItems.map((cat, index) => (
          <div key={index} className="seen-item">
            <img
              src={cat.url}
              alt={`Seen cat ${index}`}
              className="seen-item-image"
            />
            {cat.breeds && cat.breeds[0] && (
              <p>
                A {cat.breeds[0].name} cat from {cat.breeds[0].origin}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default SeenList;