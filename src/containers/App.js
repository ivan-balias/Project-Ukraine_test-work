import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "../pages/HomePage";
import {loader as HomeLoader} from '../loaders/homePageLoader'
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../pages/ProductPage";
import {loader as ProductLoader} from "../loaders/productPageLoader"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      errorElement: <ErrorPage/>,
      loader: HomeLoader
    },
    {
      path: "product/:productId/:colorId",
      element: <ProductPage/>,
      loader: ProductLoader
    }
  ]);

  return (
      <RouterProvider router={router}/>
  )
}
