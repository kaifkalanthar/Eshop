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
import AuthPrivateRoutes from "./components/AuthPrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductSection /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: "/profile", element: <UserProfile /> },
      { path: "/cart", element: <CartItems /> },
    ],
  },
  {
    element: <AuthPrivateRoutes />,
    children: [
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

export default routes;
