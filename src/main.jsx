import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from "./context/ProductContext/ProductContext.jsx";
import { CartProvider } from './context/ProductContext/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <CartProvider>
   <DataProvider>
     <App />
   </DataProvider>
   </CartProvider>
  </StrictMode>,
  </BrowserRouter>
)
