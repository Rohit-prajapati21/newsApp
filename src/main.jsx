import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreProvider from './store.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StoreProvider>
    <App />
    </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
)
