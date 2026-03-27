'use client' // Technical necessity: Uses the UserContext hook

import { useUser } from '../context/UserContext';
import Link from 'next/link';

function HomeContent() {
  const { user } = useUser();

  return (
    <div className="HomeContent">
      <h1>Welcome to Bitcoin Financial Dashboard</h1>
      
      {user ? (
        <div className="welcome-section">
          <h2>Hello, {user.name}!</h2>
          <p>You are successfully logged in. Check out the <Link href="/bitcoin">Bitcoin Rates</Link>.</p>
        </div>
      ) : (
        <div className="guest-section">
          <h2>Hello, Guest!</h2>
          <p>Please <Link href="/login">Login</Link> to access your dashboard.</p>
        </div>
      )}
    </div>
  );
}

export default HomeContent;