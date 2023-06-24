import { Stack, HStack, Icon, Text } from "@chakra-ui/react";
import { BsGoogle } from "react-icons/bs";
import Authentication from "../services/auth";
import { Link } from "react-router-dom";
interface Props {
  type: "REGISTER" | "LOGIN";
}
const FormFooter = ({ type }: Props) => {
  const auth = new Authentication();
  return (
    <Stack textAlign="center" paddingY={1} spacing={3}>
      <HStack
        spacing={3}
        justify="center"
        marginY={5}
        paddingY={2}
        transition="ease-in 0.2s"
        border="1px solid #b3b3b3"
        _hover={{ bgColor: "gray.400" }}
        borderRadius={10}
        cursor={"pointer"}
        onClick={() => auth.googleAuthProvider()}
      >
        <Icon as={BsGoogle} boxSize="30px" />
        <Text fontSize="lg">continue with Google</Text>
      </HStack>
      <Link to={type === "REGISTER" ? "/login" : "/register"}>
        <Text textAlign="center" textDecoration="underline">
          {type === "REGISTER"
            ? "Already have an account? SignIn"
            : "Don't have an account? SignUp"}
        </Text>
      </Link>
    </Stack>
  );
};

export default FormFooter;
