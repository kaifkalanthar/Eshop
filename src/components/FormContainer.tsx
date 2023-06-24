import { Box, Flex } from "@chakra-ui/react";
import { FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode[];
  handleOnSubmit: (event: FormEvent) => void;
}

const FormContainer = ({ children, handleOnSubmit }: Props) => {
  return (
    <Flex justify="center">
      <Box
        width={{ sm: "300px", md: "400px" }}
        border="1px solid #b3b3b3"
        padding={8}
        borderRadius={5}
      >
        <form onSubmit={(event) => handleOnSubmit(event)}>{children}</form>
      </Box>
    </Flex>
  );
};

export default FormContainer;
