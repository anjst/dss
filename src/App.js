import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCoffee);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="coming">coming soon</p>
        <p id="mail">info@dss.com</p>
        <a href="https://www.instagram.com/dss_oman/">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
      </header>
    </div>
  );
}

export default App;
