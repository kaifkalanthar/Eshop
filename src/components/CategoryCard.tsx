import { Card, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import productStore from "../store/ProductStore";

interface Category {
  name: string;
  img: string;
}

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  const setCategory = productStore((s) => s.setCategory);

  return (
    <Card
      width={["250px", "200px", "300px"]}
      mx="auto"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Stack overflow="hidden" borderRadius={10} role="link">
        <Link onClick={() => setCategory(category.name)} to="products">
          <Image
            overflow="hidden"
            width="100%"
            src={category.img}
            alt={category.name}
          />
          <Text
            flexWrap="nowrap"
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
    </Card>
  );
};

export default CategoryCard;
