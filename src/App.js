import logo from './logo.svg';
import './App.css';

function App() {
  console.log("------------------------------------------------------------")
  console.log(process.env.REACT_APP_DEVPMJ, process.env.REACT_APP_ENVIRONMENT)
  console.log("------------------------------------------------------------")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Thanks!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
