import { UserProvider } from '../context/UserContext';
import NavBar from '../components/NavBar';
import './globals.css';

export const metadata = {
  title: 'Financial Dashboard',
  description: 'A Next.js dashboard for Bitcoin tracking',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {/* This Header sticks to the top of every page */}
          <header className="global-header">
            <h1>Financial Dashboard</h1>
          </header>

          {/* NavBar sits right below the header */}
          <NavBar />

          {/* This 'main' tag is where page.js injects the changing content */}
          <main className="content-area">
            {children}
          </main>

          {/* This Footer sticks to the bottom of every page */}
          <footer className="global-footer">
            <p>© 2026 Bitcoin Tracker | Data by CoinGecko</p>
          </footer>
        </UserProvider>
      </body>
    </html>
  )
}