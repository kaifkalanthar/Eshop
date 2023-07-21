import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoutes from "./components/PrivateRoutes";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";
import UserProfile from "./pages/ProfilePage";
import LoginForm from "./pages/formPages/LoginForm";
import RegisterForm from "./pages/formPages/RegisterForm";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "profile", element: <UserProfile /> },
      { path: "cart", element: <CartPage /> },
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
