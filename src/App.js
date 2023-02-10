import './App.css';
import { Header } from './components/Header.js';

function App( { Header }) {
  return (
    <div className="App">
      {<Header />}
    </div>
  );
}

export default App;
