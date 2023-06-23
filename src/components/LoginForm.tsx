import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
import { auth } from "../services/firebase-config";
import ms from "ms";
const schema = z.object({
  email: z.string(),
  password: z.string(),
});

type UserData = z.infer<typeof schema>;
const LoginForm = () => {
  const { register, getValues } = useForm<UserData>({
    resolver: zodResolver(schema),
  });
  const toast = useToast();

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const { email, password } = getValues();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(user.providerData));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      toast({
        title: "Check email or password",
        description: "'If you don't have an account signUp'",
        status: "error",
        duration: ms("5s"),
        isClosable: false,
        position: "top",
      });
    }
  };
  return (
    <Flex justify="center">
      <Box
        width={{ sm: "300px", md: "400px" }}
        border="1px solid #b3b3b3"
        padding={8}
        borderRadius={5}
      >
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <Heading textAlign="center" paddingY={3} size="lg">
            Login
          </Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              {...register("email")}
              name="email"
              type="email"
              marginBottom={5}
            />
          </FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password")}
            name="password"
            type="password"
            marginBottom={5}
          />
          <CustomButton width="100%">
            <Text>SignIn</Text>
          </CustomButton>
          <Stack textAlign="center" paddingY={1} spacing={3}>
            <Text>or continue with</Text>
            <HStack spacing={3} justify="center">
              <Icon as={BsGoogle} boxSize="30px" />
              <Icon as={BsGithub} boxSize="30px" />
            </HStack>
            <Link to="register">
              <Text textDecoration="underline">
                Don't have an account? SignUp
              </Text>
            </Link>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginForm;
