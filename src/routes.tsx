import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HeroSection /> },
      { path: "products", element: <ProductSection /> },
    ],
  },
]);

export default routes;
