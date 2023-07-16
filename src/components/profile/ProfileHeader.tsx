import { Avatar, Box, Heading } from "@chakra-ui/react";
import CustomButton from "../button/CustomButton";
import userStore from "../../store/UserStore";

const ProfileHeader = () => {
  const user = userStore((s) => s.user);
  return (
    <>
      <Box textAlign={"center"}>
        <Avatar name={user.displayName!} size={"2xl"} />
        <Heading fontSize={"3xl"}>{user.displayName}</Heading>
      </Box>
      <Box mx="auto">
        <CustomButton
          handleOnclick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
        >
          Logout
        </CustomButton>
      </Box>
    </>
  );
};

export default ProfileHeader;
