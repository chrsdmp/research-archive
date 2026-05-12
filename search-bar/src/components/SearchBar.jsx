import { useState } from "react";

function SearchBar({ placeholder = "Search...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div style={styles.container}>
      <span style={styles.icon}>🔍</span>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    background: "#e6eef7",
    padding: "12px 16px",
    borderRadius: "999px",
    width: "100%",
    maxWidth: "600px",
  },
  icon: {
    marginRight: "10px",
    fontSize: "18px",
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
    fontSize: "16px",
  },
};

export default SearchBar;