//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import WebGame from './ui/WebGame'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <WebGame/>
  </HashRouter>
)
