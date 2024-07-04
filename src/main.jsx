
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Toaster } from "sonner"
import './index.css'

// pages

import LoginPage from "./pages/Loginpage"
import HomePage from './pages/HomePage'
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from './pages/ProductDetailPage'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path:"/productos",
        element: <ProductsPage />
      },
      {
        path: "/productos/:id",
        element: <ProductDetailPage />
      }

    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster />
<RouterProvider router={router} />
  </>
)
