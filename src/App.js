import Weather from "./Weather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Weather />
      </div>
      <footer className="reference">
        <a
          href="https://github.com/paulinagonzalezc/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Paulina Gonzalez</span>
      </footer>
    </div>
  );
}

export default App;
