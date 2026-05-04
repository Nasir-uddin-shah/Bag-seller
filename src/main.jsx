import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import { CartProvider } from './contextApis/CartContext.jsx';
import { CheckOutProvider } from './contextApis/checkoutContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <CheckOutProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>    
      </CheckOutProvider>
    </CartProvider>
  </StrictMode>
)
