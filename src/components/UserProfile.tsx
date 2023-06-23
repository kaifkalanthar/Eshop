import { Heading } from "@chakra-ui/react";
import userStore from "../store/UserStore";

const UserProfile = () => {
  const user = userStore((s) => s.user);
  return <Heading>{user.displayName}</Heading>;
};

export default UserProfile;
