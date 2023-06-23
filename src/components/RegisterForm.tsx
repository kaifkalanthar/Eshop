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
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { z } from "zod";
import { auth } from "../services/firebase-config";
import CustomButton from "./CustomButton";
import ms from "ms";

const schema = z.object({
  username: z
    .string()
    .min(4, { message: "username should be at least 4 characters" })
    .max(15),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "password should be at least 6 characters" }),
});

type UserData = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<UserData>({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { username, email, password } = getValues();
    try {
      setIsLoading(true);
      const { user: data } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(data, {
        displayName: username,
      });

      const { user: updatedUser } = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem("user", JSON.stringify(updatedUser.providerData));
      setIsLoading(false);
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "User already exist",
        status: "error",
        duration: ms("5s"),
        isClosable: false,
        position: "top",
      });
      setIsLoading(false);
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
            SignUp
          </Heading>
          <FormControl gap={1} marginBottom={5}>
            <FormLabel>Username</FormLabel>
            <Input {...register("username")} type="text" name="username" />
            {errors.username && (
              <Text fontSize="sm" color="red">
                {errors.username.message}
              </Text>
            )}
          </FormControl>
          <FormControl gap={1} marginBottom={5}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")} type="email" name="email" />
            {errors.email && (
              <Text fontSize="sm" color="red">
                {errors.email.message}
              </Text>
            )}
          </FormControl>
          <FormControl gap={1} marginBottom={5}>
            <FormLabel>Password</FormLabel>
            <Input {...register("password")} type="password" name="password" />
            {errors.password && (
              <Text fontSize="sm" color="red">
                {errors.password.message}
              </Text>
            )}
          </FormControl>
          <CustomButton width="100%" valid={!isValid}>
            <Text>{isLoading ? "Loading.." : "SignUp"}</Text>
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
        </form>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
