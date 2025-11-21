import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SellerDashboard from './SellerDashboard.jsx'

// Use hash-based routing for GitHub Pages compatibility
const hash = window.location.hash;
const isSeller = hash === '#/seller';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isSeller ? <SellerDashboard /> : <App />}
  </StrictMode>,
)
