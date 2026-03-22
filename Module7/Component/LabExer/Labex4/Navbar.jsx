import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="nav-menu">
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/bitcoin">Bitcoin Rates</NavLink></li>
            </ul>
        </nav>
    );
}