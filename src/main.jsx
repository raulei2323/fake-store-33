
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Toaster } from "sonner"
import './index.css'

// pages

import LoginPage from "./pages/Loginpage"
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path:"/productos",
    element: <p>Productos</p>
  },
  {
    path: "/productos/:id",
    element: <p>Producto</p>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster />
<RouterProvider router={router} />
  </>
)
