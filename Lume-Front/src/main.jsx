import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Home from './Pages/Home/Home.jsx';
import Header from './components/Header.jsx';
import './index.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
)
