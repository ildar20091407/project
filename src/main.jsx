import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/main.css'
import './css/media.css'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
)
