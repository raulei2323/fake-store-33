
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Toaster } from "sonner"
import './index.css'

// pages

import LoginPage from "./pages/Loginpage"
import HomePage from './pages/HomePage'
import ProductsPage from "./pages/ProductsPage"

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
    element: <ProductsPage />
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
