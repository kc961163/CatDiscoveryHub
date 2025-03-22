// src/components/CatDisplay/CatDisplay.jsx
import React from "react";
import "./CatDisplay.css";

function CatDisplay({ item, onBan }) {
  if (!item || item.error) {
    return <p>{item?.error || "No image available"}</p>;
  }

  // Extract breed information
  const breed = item.breeds[0];
  const breedName = breed.name;
  const origin = breed.origin;
  const altNames = breed.alt_names;
  const lifeSpan = breed.life_span;
  const weightImperial = breed.weight.imperial;
  const weightMetric = breed.weight.metric;

  return (
    <div className="cat-display">
      <h2 onClick={() => onBan("origin", origin)} style={{ cursor: "pointer" }}>
        Origin: {origin}
      </h2>
      <h2 onClick={() => onBan("alt_names", altNames)} style={{ cursor: "pointer" }}>
        Alt Names: {altNames}
      </h2>
      <h2 onClick={() => onBan("life_span", lifeSpan)} style={{ cursor: "pointer" }}>
        Life Span: {lifeSpan}
      </h2>
      <h2 onClick={() => onBan("weight", weightImperial)} style={{ cursor: "pointer" }}>
        Weight (Imperial): {weightImperial}
      </h2>
      <img src={item.url} alt={`Cat - ${breedName}`} />
      <p>Dimensions: {item.width} x {item.height}</p>
    </div>
  );
}

export default CatDisplay;