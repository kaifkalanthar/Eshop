import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categories from "../data/categories";
import productStore from "../store/ProductStore";

const CategorySection = () => {
  const setCategory = productStore((s) => s.setCategory);
  return (
    <Box paddingY={5}>
      <Heading fontWeight="medium" textAlign="center" padding={10}>
        Category
      </Heading>
      <Flex
        overflowX={"scroll"}
        overflowY={"hidden"}
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        <Box display={"flex"} gap={5}>
          {categories.map((category, index) => (
            <Box key={index} width={"250px"}>
              <Stack position="relative" overflow="hidden" borderRadius={10}>
                <Link onClick={() => setCategory(category.name)} to="products">
                  <Image
                    overflow={"hidden"}
                    width="100%"
                    src={category.img}
                    alt={category.name}
                  />
                  <Text
                    bg="pink.200"
                    textAlign="end"
                    color="#111"
                    fontSize="xl"
                    marginTop={-5}
                    padding={2}
                    position="relative"
                    zIndex={1}
                  >
                    {category.name}
                  </Text>
                </Link>
              </Stack>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default CategorySection;
