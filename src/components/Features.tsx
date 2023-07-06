import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Feature } from "../data/features";
import MotionTextContainer from "./MotionText";
interface Props {
  feature: Feature;
}
const Features = ({ feature }: Props) => {
  if (feature.id)
    return (
      <>
        <Flex direction={"column"} gap={5}>
          <Flex
            key={feature.id}
            width="100%"
            flexDirection={{
              base: "column",
              md: feature.id % 2 === 0 ? "row-reverse" : "row",
              lg: feature.id % 2 === 0 ? "row-reverse" : "row",
            }}
            gap={[2, 5, 20]}
            justifyContent="center"
          >
            <Image
              src={feature.image}
              marginX={["auto", "auto", 0]}
              boxSize={["280px", "320px", "460px"]}
            />
            <Box
              w={["auto", "auto", "30%"]}
              paddingTop={["auto", "auto", "100px"]}
              marginY="auto"
            >
              <Heading mb={5}>{feature.title}</Heading>
              <MotionTextContainer>{feature.description}</MotionTextContainer>
            </Box>
          </Flex>
        </Flex>
      </>
    );
};

export default Features;
