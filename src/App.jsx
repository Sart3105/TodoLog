import React from 'react'
import Login from './Login.jsx'
import Forgot from './Forgot.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Userdetail from './Userdetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Userdetail" element={<Userdetail />}/>
        <Route path="/forgot" element={<Forgot />}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App