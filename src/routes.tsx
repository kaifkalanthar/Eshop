import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductSection from "./components/ProductSection";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./components/ProductDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductSection /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },
]);

export default routes;
