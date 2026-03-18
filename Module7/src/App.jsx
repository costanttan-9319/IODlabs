import BitcoinRates from '../Component/LabExer/Labex1/BitcoinRates';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Dashboard</h1>
      </header>
      
      <main>
        <BitcoinRates />
      </main>

      <footer>
        <p>© 2026 Bitcoin Tracker | Data by CoinGecko</p>
      </footer>
    </div>
  );
}

export default App;