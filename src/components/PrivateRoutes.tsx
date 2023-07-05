import Layout from "../pages/Layout";
import userStore from "../store/UserStore";
import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = userStore((s) => s.user);
  if (!user.uid) return <Navigate to="/login" />;

  return <Layout />;
};

export default PrivateRoutes;
