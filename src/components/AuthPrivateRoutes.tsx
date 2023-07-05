import Layout from "../pages/Layout";
import userStore from "../store/UserStore";
import { Navigate } from "react-router-dom";

const AuthPrivateRoutes = () => {
  const user = userStore((s) => s.user);
  if (user.uid) return <Navigate to="/profile" />;
  return <Layout />;
};

export default AuthPrivateRoutes;
