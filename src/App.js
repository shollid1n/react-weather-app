import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://shalinda-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Shalinda Holliday
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/shollid1n/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
