import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SellerDashboard from './SellerDashboard.jsx'

// Simple routing based on URL path
const path = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/seller' ? <SellerDashboard /> : <App />}
  </StrictMode>,
)
