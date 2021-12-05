import './App.css';
import Camioneta from './components/Home';
import { Links as Auto } from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Camioneta valor={Auto()} suma ='3' />

      </header>
    </div>
  );
}

export default App;
