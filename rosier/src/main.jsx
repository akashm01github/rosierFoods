
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
        <CartProvider>
            <App />
            <ToastContainer position="top-right" autoClose={1000} />
        </CartProvider>
    </AuthProvider>
    </BrowserRouter>

)
