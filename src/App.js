import "./App.css";
import Search from "./Search";
import CG from "./images/CG.png";
import banner from "./images/banner.jpg";

function App() {
  return (
    <div className="App">
      <div className="Weather-App">
        <header className="App-header">
          <div className="row">
            <img src={CG} alt="logo" className="CG" />
            <img src={banner} alt="logo" className="banner d-none d-md-block" />
          </div>
        </header>
        <Search defaultCity="Faro" />
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
