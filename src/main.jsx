import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import "./index.css"
import ErrorPage from './pages/error.jsx';
import ProductPage from './pages/product.jsx';
import ProductDetail from './pages/productdetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  {
    path: "/productsdetail",
    element: <ProductDetail/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
