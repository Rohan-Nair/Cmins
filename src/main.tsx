import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GeistProvider } from '@geist-ui/core'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeistProvider>
      <App />
      <Toaster />
    </GeistProvider>
  </React.StrictMode>,
)
