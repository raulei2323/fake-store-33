
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Toaster } from "sonner"
import './index.css'

// pages

import LoginPage from "./pages/Loginpage"
import HomePage from './pages/HomePage'
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from './pages/ProductDetailPage'

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
    element: <ProductDetailPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster />
<RouterProvider router={router} />
  </>
)
