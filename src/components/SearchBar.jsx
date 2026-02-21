import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, loading }) => {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar-wrap">
      <div className="searchbar-box">
        <span className="searchbar-icon">🔍</span>
        <input
          type="text"
          className="searchbar-input"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          className="searchbar-btn"
          onClick={handleSearch}
          disabled={loading || !username.trim()}
        >
          {loading ? "Searching..." : "Analyze →"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
