import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import PageNavbar from './components/PageNavbar'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageNavbar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
