import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HeroSection /> },
      { path: "products", element: <ProductSection /> },
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> },
      { path: "profile", element: <UserProfile /> },
    ],
  },
]);

export default routes;
