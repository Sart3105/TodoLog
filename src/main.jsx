import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx'
import Login from './Login.jsx'
import './Index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
