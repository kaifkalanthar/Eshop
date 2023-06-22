import {
  GridItem,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";
import CustomButton from "./CustomButton";
import MotionTextContainer from "./MotionText";

const HeroSection = () => {
  const navigate = useNavigate();
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      templateColumns={{ md: "0.4fr 0.5fr" }}
      padding={5}
      spacing={5}
    >
      <GridItem boxSize="70%" margin="0 auto">
        <Image src={heroImage} height={{ md: "75vh" }} />
      </GridItem>
      <GridItem margin={{ md: "auto" }} gap={5}>
        <Stack spacing={5}>
          <Heading size="3xl">New Cochtail Hoodies</Heading>

          <MotionTextContainer>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            laudantium quos natus illum, cupiditate aspernatur numquam cumque
            illo sed, a harum vitae laborum nisi officiis magnam. Eligendi,
            reprehenderit itaque ut exercitationem minus, quibusdam quas dicta
            amet odit eveniet in suscipit ex recusandae quae! Facere, cumque.
            Aperiam labore inventore
          </MotionTextContainer>

          <CustomButton handleOnclick={() => navigate("/products")}>
            <Text>BuyNow</Text>
            <Icon as={AiOutlineShoppingCart} />
          </CustomButton>
        </Stack>
      </GridItem>
    </SimpleGrid>
  );
};

export default HeroSection;
