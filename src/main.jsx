import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reviews from './components/Reviews.jsx'
import JoinUs from './components/JoinUs.jsx'

createRoot(document.getElementById('root')).render(
  <><StrictMode>
    <App />
  </StrictMode><Reviews />
  <JoinUs/>
  </>
)
