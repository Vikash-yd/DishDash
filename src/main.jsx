import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Receipe from './Receipe.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/receipe",
    element: <Receipe />,
  },
  {
    path: "/DishDash/",
    element: <App />,
  },
  {
    path: "/DishDash/receipe/:id",
    element: <Receipe />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <RouterProvider router={router} />
  //  </React.StrictMode>
)
