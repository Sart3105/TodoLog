import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx'
import Login from './Login.jsx'
import './Index.css'
import Forgot from './Forgot.jsx';
import App from './App.jsx'
import Userdetail from './Userdetail.jsx';


createRoot(document.getElementById('root')).render(

   <StrictMode>
    <App />
   </StrictMode>
    
)
