import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Router> */}
        <Routes>
        <Route path='/' element={<App/>} >
        <Route path='/add-transaction' element={<Add />} />
        </Route>
        </Routes>
      {/* </Router> */}
    </BrowserRouter>
  </StrictMode>,
)
