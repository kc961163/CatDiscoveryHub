// src/App.jsx
import React from "react";
import "./App.css";
import { useCats } from "./hooks/useCats";
import CatDisplay from "./components/CatDisplay/CatDisplay";
import SeenList from "./components/SeenList/SeenList";
import BanList from "./components/BanList/BanList";

function App() {
  const { item, error, banList, seenItems, loadItem, toggleBan } = useCats();

  return (
    <div className="app-container">
      <div className="sidebar-left">
        <SeenList seenItems={seenItems} />
      </div>

      <div className="main-content">
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!item && !error ? (
          <div className="discover-container">
            <p>Discover Cats</p>
            <button onClick={loadItem} className="next-button">
              Discover
            </button>
          </div>
        ) : (
          <>
            <CatDisplay item={item} onBan={toggleBan} />
            <button onClick={loadItem} className="next-button">
              Next
            </button>
          </>
        )}
      </div>

      <div className="sidebar-right">
        <BanList banList={banList} onToggleBan={toggleBan} />
      </div>
    </div>
  );
}

export default App;