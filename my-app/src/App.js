import logo from './logo.svg';
import './App.css';
import createProfile from './components/createProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">{createProfile()}</header>
    </div>
  );
}

export default App;
