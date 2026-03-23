'use client' // Technical necessity: Context uses state

import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // This will hold { name: 'Costant' } when logged in

  const login = (email, password) => {
    // Simulating the logic you requested
    if (email.toLowerCase() === 'costanttan@gmail.com' && password === 'IODRocks') {
      setUser({ name: 'Costant Tan' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to make it easy to use this logic in our components
export const useUser = () => useContext(UserContext);