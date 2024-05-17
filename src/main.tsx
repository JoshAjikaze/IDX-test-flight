import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './routes/Index.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>,
)
