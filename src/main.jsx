import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth-log/auth-log' 
import Dashboard from './pages/dashboard/dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)