import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './modules/auth/AppLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout></AppLayout>
  </StrictMode>,
)
