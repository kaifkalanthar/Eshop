import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProductDetailsPage from "./components/ProductDetailsPage";
import ProductSection from "./components/ProductSection";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import CartItems from "./components/CartItems";
import PrivateRoutes from "./components/PrivateRoutes";
import ErrorPage from "./components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductSection /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
      { path: "/profile", element: <UserProfile /> },
      { path: "/cart", element: <CartItems /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "/register", element: <RegisterForm /> },
      { path: "/login", element: <LoginForm /> },
    ],
  },
]);

export default routes;
