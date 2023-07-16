import { FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Authentication from "../../services/auth-service";
import CustomButton from "../../components/button/CustomButton";
import FormContainer from "../../components/form/FormContainer";
import FormFooter from "../../components/form/FormFooter";

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

  const auth = new Authentication();

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { username, email, password } = getValues();
    auth.registerUser(username, email, password);
  };

  return (
    <FormContainer handleOnSubmit={(event: FormEvent) => handleOnSubmit(event)}>
      <Heading textAlign="center" paddingY={3} size="lg">
        SignUp
      </Heading>
      <FormControl gap={1} marginBottom={5}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input {...register("username")} type="text" name="username" />
        {errors.username && (
          <Text fontSize="sm" color="red">
            {errors.username.message}
          </Text>
        )}
      </FormControl>
      <FormControl gap={1} marginBottom={5}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input {...register("email")} type="email" name="email" />
        {errors.email && (
          <Text fontSize="sm" color="red">
            {errors.email.message}
          </Text>
        )}
      </FormControl>
      <FormControl gap={1} marginBottom={5}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input {...register("password")} type="password" name="password" />
        {errors.password && (
          <Text fontSize="sm" color="red">
            {errors.password.message}
          </Text>
        )}
      </FormControl>
      <CustomButton width="100%" valid={!isValid}>
        <Text>SignUp</Text>
      </CustomButton>
      <FormFooter type="REGISTER" />
    </FormContainer>
  );
};

export default RegisterForm;
