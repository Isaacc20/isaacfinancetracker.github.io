import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Router> */}
        <Routes>
        <Route path='/' element={<App/>} >
        <Route path='/add-transaction' element={} />
        </Route>
        </Routes>
      {/* </Router> */}
    </BrowserRouter>
  </StrictMode>,
)
