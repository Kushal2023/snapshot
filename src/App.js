import { useState } from "react";
import "./App.css";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

function App() {
  const [searchText, setSearchText] = useState("Beaches");
  const [searchText1, setSearchText1] = useState("Beaches");
  return (
    <div className="App">
      <h1>SnapShot</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setSearchText1(searchText)}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <PhotoGallery searchText={searchText1} />
    </div>
  );
}

export default App;
