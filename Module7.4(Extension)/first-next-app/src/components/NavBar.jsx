'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '../context/UserContext';

function NavBar() {
  const pathname = usePathname();
  const { user, logout } = useUser();

  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link href="/login" className={pathname === '/login' ? 'active' : ''}>Login</Link>
        </li>
        <li>
          <Link href="/bitcoin" className={pathname === '/bitcoin' ? 'active' : ''}>Bitcoin</Link>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Logout ({user.name})</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;