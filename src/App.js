import logo from './logo.svg';
import './App.css';
import ComponentState from './ComponentState';
import Task from './Task';

function App() {
  const name = 'Sachin Tendulkar';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {name}. Learn React
        </a>
        <ComponentState name={name} />
        <Task />
      </header>
    </div>
  );
}

export default App;
