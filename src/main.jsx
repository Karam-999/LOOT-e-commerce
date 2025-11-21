import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SellerDashboard from './SellerDashboard.jsx'

// Simple routing based on URL path
const path = window.location.pathname;
const basePath = import.meta.env.BASE_URL;

// Check if path ends with /seller (accounting for base path)
const isSeller = path.endsWith('/seller') || path.endsWith('/seller/');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isSeller ? <SellerDashboard /> : <App />}
  </StrictMode>,
)
