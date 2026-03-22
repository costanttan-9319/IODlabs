import { EmojiProvider } from '../Component/LabExer/Labex3/EmojiContext';
import Navbar from '../Component/LabExer/Labex4/Navbar';
import AppRoutes from '../Component/LabExer/Labex4/AppRoutes';
import './App.css';

function App() {
  return (
    <EmojiProvider>
      <div className="App">
        <header className="App-header">
          <h1>Financial Dashboard</h1>
        </header>

        <Navbar />
        
        <main>
          <AppRoutes />
        </main>

        <footer>
          <p>© 2026 Bitcoin Tracker | Data by CoinGecko</p>
        </footer>
      </div>
    </EmojiProvider>
  );
}

export default App;