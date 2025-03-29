// src/components/CatDisplay/CatDisplay.jsx
import React from "react";
import "./CatDisplay.css";

function CatDisplay({ item, onBan }) {
  if (!item || item.error) {
    return <p>{item?.error || "No image available"}</p>;
  }

  const breed = item.breeds[0];
  const breedName = breed.name;
  const origin = breed.origin;
  const lifeSpan = breed.life_span;
  const weightImperial = breed.weight.imperial;

  return (
    <div className="cat-display">
      <button onClick={() => onBan("origin", origin)} className="attribute-button">
        Origin: {origin}
      </button>
      <button onClick={() => onBan("life_span", lifeSpan)} className="attribute-button">
        Life Span: {lifeSpan}
      </button>
      <button onClick={() => onBan("weight", weightImperial)} className="attribute-button">
        Weight (Imperial): {weightImperial}
      </button>
      <p>
        A {breedName} cat from {origin}
      </p>
      <img src={item.url} alt={`Cat - ${breedName}`} />
      <p>Dimensions: {item.width} x {item.height}</p>
    </div>
  );
}

export default CatDisplay;