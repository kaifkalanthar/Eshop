import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";
import categories from "../../data/categories";
import productStore from "../../store/ProductStore";

const ProductSideBar = () => {
  const setCategory = productStore((s) => s.setCategory);
  return (
    <List>
      {categories.map((category, index) => (
        <ListItem mb={2} key={index}>
          <HStack spacing={5}>
            <Image src={category.img} boxSize={"40px"} borderRadius={5} />
            <Button
              fontSize="lg"
              whiteSpace="normal"
              textAlign="left"
              variant={"link"}
              onClick={() => setCategory(category.name)}
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductSideBar;
