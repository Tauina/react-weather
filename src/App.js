import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Weather-App">
        <header className="App-header">
          <a href="/">Lisbon</a>
          <a href="/">Paris</a>
          <a href="/">Sydney</a>
          <a href="/">San Francisco</a>
        </header>
      </div>
      <footer>
        This App was coded by{" "}
        <a href="https://github.com/Tauina" target="_blank" rel="noreferrer">
          Catarina Gouveia
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Tauina/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://peppy-mermaid-b65ea5.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
