import SearchBar from "./components/SearchBar";
import Profile from "./components/profile";
import Profile from './components/profile';

function App() {
  const handleSearch = (value) => {
    console.log("Searching:", value);
  };

  return (
    <div style={styles.container}>
      <Profile />

      <SearchBar
        placeholder="Search my library..."
        onSubmit={handleSearch}
      />
    </div>
    <Profile />
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
};

export default App;
