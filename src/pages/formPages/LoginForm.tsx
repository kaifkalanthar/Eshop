import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Authentication from "../../services/auth-service";
import CustomButton from "../../components/button/CustomButton";
import FormContainer from "../../components/form/FormContainer";
import FormFooter from "../../components/form/FormFooter";

const LoginForm = () => {
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });

  type UserData = z.infer<typeof schema>;

  const { register, getValues } = useForm<UserData>({
    resolver: zodResolver(schema),
  });

  const auth = new Authentication();

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = getValues();

    auth.loginUser(email, password);
  };
  return (
    <FormContainer handleOnSubmit={(event: FormEvent) => handleOnSubmit(event)}>
      <Heading textAlign="center" paddingY={3} size="lg">
        Login
      </Heading>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          {...register("email")}
          name="email"
          type="email"
          marginBottom={5}
        />
      </FormControl>
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input
        {...register("password")}
        name="password"
        type="password"
        marginBottom={5}
      />
      <CustomButton width="100%">
        <Text>SignIn</Text>
      </CustomButton>
      <Stack textAlign="center" marginTop={5}>
        <Heading fontSize="md">DEMO ACCOUNT</Heading>
        <Text>Email : user@gmail.com</Text>
        <Text>Password : user#asyu</Text>
      </Stack>
      <FormFooter type="LOGIN" />
    </FormContainer>
  );
};

export default LoginForm;
