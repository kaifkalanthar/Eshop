import {
  Flex,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Stack,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const RegisterForm = () => {
  return (
    <Flex justify="center">
      <FormControl
        width={{ sm: "300px", md: "400px" }}
        border="1px solid #b3b3b3"
        padding={8}
        borderRadius={5}
      >
        <Heading textAlign="center" paddingY={3} size="lg">
          SignUp
        </Heading>
        <FormLabel>Username</FormLabel>
        <Input marginBottom={5} />
        <FormLabel>Email</FormLabel>
        <Input marginBottom={5} />
        <FormLabel>Password</FormLabel>
        <Input marginBottom={5} />
        <CustomButton width="100%">
          <Text>SignIn</Text>
        </CustomButton>
        <Stack textAlign="center" paddingY={1} spacing={3}>
          <Text>or continue with</Text>
          <HStack spacing={3} justify="center">
            <Icon as={BsGoogle} boxSize="30px" />
            <Icon as={BsGithub} boxSize="30px" />
          </HStack>
          <Link to="signin">
            <Text textDecoration="underline">
              Already have an account? SignIn
            </Text>
          </Link>
        </Stack>
      </FormControl>
    </Flex>
  );
};

export default RegisterForm;
