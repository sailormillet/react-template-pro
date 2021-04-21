import "./index.scss";
import { useHistory } from "react-router-dom";

// const App: React.FunctionComponent<Props> = (props: Props) => {
const App = () => {
  const history = useHistory();
  const handleKeyDown = () => {
    history.push("/product");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>{` hello,welcome to amy's shop `}</p>
        <div className="App-link" onClick={handleKeyDown}>
          {` let's start `}
        </div>
      </header>
    </div>
  );
};

export default App;
