import logo from './logo.svg';
import './index.css';
import { Home, Login, DashBoard } from './components'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider';

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/*" element={<Home />} />
                    <Route path="/dashboard/*" element={<DashBoard />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}