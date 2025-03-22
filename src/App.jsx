// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import CatDisplay from "./components/CatDisplay/CatDisplay";

// Fetch function
async function fetchRandomCatImage(banList) {
  try {
    const apiKey = import.meta.env.VITE_CAT_API_KEY; // Use VITE_ prefix
    const url = `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=${apiKey}`;
    console.log("Fetching URL:", url);
    const response = await fetch(url);
    const rateRemaining = response.headers.get("X-RateLimit-Remaining");
    if (rateRemaining && parseInt(rateRemaining) < 5) {
      alert("Warning: API rate limit is nearly exceeded. Please try again later.");
      return { error: "Rate limit nearly exceeded" };
    }
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    if (data.length > 0) {
      const item = data[0];
      if (!item.breeds || item.breeds.length === 0) {
        throw new Error("No breed data available.");
      }
      const breedName = item.breeds[0].name;
      if (banList.origin && banList.origin.includes(item.breeds[0].origin)) {
        return await fetchRandomCatImage(banList);
      }
      // Similarly, check for other ban types if needed
      return item;
    } else {
      throw new Error("No images returned.");
    }
  } catch (error) {
    console.error("Error fetching cat image:", error);
    return { error: error.message };
  }
}

function App() {
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");
  // Ban list as an object for multiple attributes
  const [banList, setBanList] = useState({
    origin: [],
    alt_names: [],
    life_span: [],
    weight: [],
  });

  const loadItem = async () => {
    const fetchedItem = await fetchRandomCatImage(banList);
    if (fetchedItem.error) {
      setError(fetchedItem.error);
      setItem(null);
    } else {
      setError("");
      setItem(fetchedItem);
    }
  };

  const toggleBan = (type, value) => {
    setBanList(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(attr => attr !== value)
        : [...prev[type], value]
    }));
  };

  useEffect(() => {
    loadItem();
  }, [banList]); // Optionally refetch when ban list changes

  return (
    <div className="app">
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {item ? (
        <CatDisplay item={item} onBan={toggleBan} />
      ) : (
        !error && <p>Loading...</p>
      )}
      <button onClick={loadItem}>Next</button>
      <div className="ban-list">
        <h3>Banned Attributes:</h3>
        {Object.keys(banList).map((type) => (
          <div key={type}>
            <h4>{type}:</h4>
            {banList[type].length > 0 ? (
              banList[type].map((attr, index) => <p key={index}>{attr}</p>)
            ) : (
              <p>None</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;