import logo from "@src/logo.svg";
import "./index.css";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const handleKeyDown = () => {
    history.push("/my");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-link" onClick={handleKeyDown}>
          Learn React
        </div>
      </header>
    </div>
  );
}

export default App;
