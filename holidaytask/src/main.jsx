import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavotiteProvider from './Context/FavoriteContext.jsx'

createRoot(document.getElementById('root')).render(
  <FavotiteProvider>
    <App />
  </FavotiteProvider>,
)
