import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import BitcoinPage from './BitcoinPage';

export default function AppRoutes() {
    return (
        <Routes>
            {/* Matches http://localhost:5173/ */}
            <Route index element={<Homepage />} />

            {/* Matches http://localhost:5173/login */}
            <Route path="login" element={<Login />} />

            {/* Matches http://localhost:5173/bitcoin */}
            <Route path="bitcoin" element={<BitcoinPage />} />

            {/* Catch-all for 404 errors */}
            <Route path="*" element={<div><h1>404: Page Not Found</h1></div>} />
        </Routes>
    );
}