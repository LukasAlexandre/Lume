import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Header from './components/Header.jsx'
import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
