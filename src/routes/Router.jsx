import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import CreateProduct from "../pages/CreateProduct";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductInfo from "../pages/ProductInfo";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'products',
        Component: Products
      },
      {
        path: 'create-product',
        element: <PrivateRoute><CreateProduct /></PrivateRoute>
      },
      {
        path: 'product-info',
        element: <PrivateRoute><ProductInfo /></PrivateRoute>
      },
      {
        path: 'product-details/:id',
        element: <PrivateRoute><ProductDetails /></PrivateRoute>
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'singup',
        Component: Singup
      }
    ]
  },
]);

export default router;
