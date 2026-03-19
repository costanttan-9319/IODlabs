import BitcoinRates from '../Component/LabExer/Labex1/BitcoinRates';
import BitcoinRates2 from '../Component/LabExer/Labex2/BitcoinRates2';
import BitcoinRatesReducer from '../Component/LabExer/Labex2/BitcoinRatesReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Dashboard</h1>
      </header>
      
      <main>
        {/* Exercise 1 using CSS classes instead of inline styles */}
        <section className="exercise-section divider">
          <h2>Exercise 1</h2>
          <p className="subtitle">Logic is in the component.</p>
          <BitcoinRates />
        </section>

        {/* Exercise 2.1 */}
        <section className="exercise-section">
          <h2>Exercise 2</h2>
          <p className="subtitle">Logic is extracted from bitcoinPrice.js.</p>
          <BitcoinRates2 />
        </section>

        {/* Exercise 2.2: Extension Version */}
        <section className="exercise-section">
          <h2>Exercise 2 (Extension)</h2>
          <p className="subtitle">useReducer within the Hook.</p>
          <BitcoinRatesReducer />
        </section>
      </main>

      <footer>
        <p>© 2026 Bitcoin Tracker | Data by CoinGecko</p>
      </footer>
    </div>
  );
}

export default App;