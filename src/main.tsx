//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './ui/App'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App/>
  </HashRouter>
)
