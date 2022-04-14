import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
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
