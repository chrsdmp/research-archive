import { useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Profile from "./components/profile";
import profileImg from "./assets/profile-acc.png";
import { openProfile } from "./store/uiSlice";
import searchAPI from "./api/search";

function App() {
  const [searchValue, setSearchValue]     = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading]             = useState(false);
  const [hasSearched, setHasSearched]     = useState(false);
  const [user, setUser] = useState({ username: "Guest", email: "--", image: profileImg });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async (value) => {
    if (!value.trim()) return;
    setLoading(true);
    setHasSearched(true);
    const results = await searchAPI(value);
    setSearchResults(results ?? []);
    setLoading(false);
  };

  const handleOpenLogin    = () => { dispatch(openProfile()); navigate("/profile"); };
  const handleLoginSuccess = (loggedUser) => setUser(loggedUser);
  const handleLogout       = () => setUser({ username: "Guest", email: "--", image: profileImg });

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        {user.username !== "Guest" ? (
          <button type="button" style={styles.userBadge} onClick={handleOpenLogin}>
            <img src={user.image} alt="Avatar" style={styles.userAvatar} />
            {user.username}
          </button>
        ) : (
          <button type="button" style={styles.loginButton} onClick={handleOpenLogin}>
            Log In
          </button>
        )}
      </div>

      {/* Search Bar */}
      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        onSubmit={handleSearch}
        placeholder="Search research articles..."
      />

      {/* States */}
      {!hasSearched && !loading && (
        <div style={styles.homeMessage}>
          Search millions of open-access academic articles powered by CORE.
        </div>
      )}
      {loading && <div style={styles.homeMessage}>Searching…</div>}
      {!loading && hasSearched && searchResults.length === 0 && (
        <div style={styles.homeMessage}>No results found. Try a different query.</div>
      )}

      {/* Results */}
      {!loading && searchResults.length > 0 && (
        <div style={{ width: "100%", maxWidth: 800, marginTop: 8 }}>
          <h3 style={styles.resultsHeading}>
            {searchResults.length} Result{searchResults.length !== 1 ? "s" : ""}
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {searchResults.map((r) => (
              <li key={r.id ?? r.title} style={styles.resultCard}>

                <div style={styles.resultTitle}>
                  {r.url ? (
                    <a href={r.url} target="_blank" rel="noreferrer" style={styles.resultLink}>
                      {r.title}
                    </a>
                  ) : r.title}
                </div>

                {r.authors?.length > 0 && (
                  <div style={styles.resultMeta}>
                    {r.authors.slice(0, 3).join(", ")}
                    {r.authors.length > 3 ? " et al." : ""}
                    {r.year ? ` · ${r.year}` : ""}
                  </div>
                )}

                {r.source && (
                  <div style={{ ...styles.resultMeta, fontStyle: "italic" }}>{r.source}</div>
                )}

                {r.abstract && (
                  <p style={styles.resultAbstract}>
                    {r.abstract.length > 220 ? r.abstract.slice(0, 220) + "…" : r.abstract}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route
          path="/profile"
          element={<Profile user={user} onLogin={handleLoginSuccess} onLogout={handleLogout} />}
        />
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "24px",
    boxSizing: "border-box",
  },

  header: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },

  loginButton: {
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(20,22,32,0.75)",
    background: "rgba(20,22,32,0.75)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    minWidth: "92px",
  },
  
  userBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(20,22,32,0.75)",
    background: "rgba(20,22,32,0.75)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },

  userAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid rgba(209,217,233,0.35)",
  },

  homeMessage: {
    marginTop: "16px",
    color: "#444",
    textAlign: "center",
    maxWidth: "500px",
    lineHeight: "1.6",
  },

  resultsHeading: {
    color: "#1a1a2e",
    marginBottom: "12px",
    fontWeight: 700,
    fontSize: "16px",
  },

  resultCard: {
    background: "#fff",
    border: "1.5px solid #d0d7e3",
    borderRadius: "12px",
    padding: "16px 20px",
    marginBottom: "12px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
  },

  resultTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "6px",
    lineHeight: "1.4",
  },

  resultLink: {
    color: "#1a56db",
    textDecoration: "none",
  },

  resultMeta: {
    fontSize: "13px",
    color: "#475569",
    marginBottom: "4px",
  },

  resultAbstract: {
    fontSize: "13px",
    color: "#334155",
    lineHeight: "1.7",
    marginTop: "8px",
    marginBottom: 0,
  },
};

export default App;