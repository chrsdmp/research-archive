import './App.css';
import logo from './logo.png';
import acadexia from './ACADEXIA.png';

function App() {
  return (
    <div>

      {/* article part yung dalwang logo sa kaliwa ng search bar*/}

      <nav className="article-navbar">

        
        <div className="article-brand">
          <img src={logo} alt="Acadexia Icon" className="article-logo-icon" />
          <img src={acadexia} alt="Acadexia" className="article-logo-wordmark" />
        </div>

      </nav>
      
      {/* homepage part yung malaking acadexia sa gitna tas maliit na logo sa taas sa gitna din*/}

      <nav className="navbar">
        <img src={logo} alt="Acadexia Icon" className="logo-icon" />
      </nav>

      <div className="hero">
        <img src={acadexia} alt="Acadexia" className="logo-wordmark" />
      </div>

    </div>
  );
}

export default App;