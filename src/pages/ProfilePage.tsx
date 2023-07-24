import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import userStore from "../store/UserStore";
import OrderedProducts from "../components/profile/OrderedProducts";
import ProfileHeader from "../components/profile/ProfileHeader";

const UserProfile = () => {
  document.title = "TrendiFy | Profile";
  const user = userStore((s) => s.user);

  useEffect(() => {
    if (!user.uid) {
      <Navigate to="/login" />;
    }
  }, [user.uid]);

  if (!user.uid) return null;

  return (
    <Stack marginX={"auto"} spacing={5} mt={5}>
      <ProfileHeader />
      <OrderedProducts />
    </Stack>
  );
};

export default UserProfile;
