// src/hooks/useCats.js
import { useState, useEffect } from "react";

async function fetchRandomCatImage(banList) {
  try {
    const apiKey = import.meta.env.VITE_CAT_API_KEY;
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
      const breed = item.breeds[0];
      // Check multiple ban attributes
      const banned =
        (banList.origin && banList.origin.includes(breed.origin)) ||
        // (banList.alt_names && banList.alt_names.includes(breed.alt_names)) ||
        (banList.life_span && banList.life_span.includes(breed.life_span)) ||
        (banList.weight &&
          (banList.weight.includes(breed.weight.imperial) ||
           banList.weight.includes(breed.weight.metric)));
      
      if (banned) {
        // Recursively fetch a new image if banned
        return await fetchRandomCatImage(banList);
      }
      return item;
    } else {
      throw new Error("No images returned.");
    }
  } catch (error) {
    console.error("Error fetching cat image:", error);
    return { error: error.message };
  }
}

export function useCats() {
  // State variables
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");
  const [banList, setBanList] = useState({
    origin: [],
    life_span: [],
    weight: []
  });
  const [seenItems, setSeenItems] = useState([]);

  // Function to fetch and set the current cat item
  const loadItem = async () => {
    const fetchedItem = await fetchRandomCatImage(banList);
    if (fetchedItem.error) {
      setError(fetchedItem.error);
      setItem(null);
    } else {
      setError("");
      setItem(fetchedItem);
      setSeenItems((prev) => [fetchedItem, ...prev]);
    }
  };

  // Toggle an attribute in the ban list
  const toggleBan = (type, value) => {
    setBanList((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((attr) => attr !== value)
        : [...prev[type], value]
    }));
  };

  // Optionally, refetch whenever the ban list changes
  // useEffect(() => {
  //   loadItem();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [banList]);

  return {
    item,
    error,
    banList,
    seenItems,
    loadItem,
    toggleBan
  };
}