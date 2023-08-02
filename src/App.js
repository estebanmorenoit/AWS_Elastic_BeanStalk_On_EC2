import logo from './logo.svg';
import './App.css';

function App() {
  const customText = "Welcome to My Awesome React App! #90daysofdevops challenge Day 87 - Esteban Moreno"; // Customized text added
  const learnMoreLink = "https://reactjs.org"; // Customized learn more link

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {customText}
        </p>
        <a
          className="App-link"
          href={learnMoreLink} // Replaced the original link with customized link
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About React
        </a>
      </header>
    </div>
  );
}

export default App;
