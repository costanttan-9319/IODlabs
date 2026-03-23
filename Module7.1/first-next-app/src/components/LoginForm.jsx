'use client'

import { useState } from 'react';
import { useUser } from '../context/UserContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      alert("Invalid credentials!");
    }
  };

  // If already logged in, we show a message (Logic only for now)
  if (user) return <p>Logged in as {user.name}</p>;

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <div className="input-group">
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <div className="input-group">
        <label>Password:</label>
        <input 
          type={showPassword ? "text" : "password"} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <div className="checkbox-group">
        <input 
          type="checkbox" 
          id="show-pw"
          checked={showPassword} 
          onChange={() => setShowPassword(!showPassword)} 
        />
        <label htmlFor="show-pw">Show Password</label>
      </div>


      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;