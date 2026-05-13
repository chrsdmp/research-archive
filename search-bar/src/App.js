import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (value) => {
    console.log("Searching:", value);
  };

  return (
    <div style={styles.container}>
      <SearchBar
        placeholder="Search my library..."
        onSubmit={handleSearch}
      />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
};

export default App;