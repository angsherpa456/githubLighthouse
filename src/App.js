import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height={'357px'} width={'505px'} className="App-logo" alt="logo" />
        <p>
          This is a React based dummy app to test the Lighthouse in Github actions while making the PR. this is the dummy test 2. added something more
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
