import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import BitcoinRates from './pages/BitcoinRates';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (name) => setCurrentUser(name);
  const handleLogout = () => setCurrentUser(null);

  return (
    <>
      <NavBar />
      <Routes>
        {/* Home page stays generic as per your first picture */}
        <Route path="/" element={<Home />} />
        
        {/* Login page gets the user state and both functions */}
        <Route 
          path="/login" 
          element={
            <Login 
              currentUser={currentUser} 
              onLogin={handleLogin} 
              onLogout={handleLogout} 
            />
          } 
        />
        
        <Route path="/bitcoin" element={<BitcoinRates />} />
      </Routes>
    </>
  );
}

export default App;