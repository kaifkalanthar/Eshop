import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import categories from "../../data/categories";
import productStore from "../../store/ProductStore";
import allCategory from "../../assets/allCategory.jpg";

const ProductSideBar = () => {
  const setCategory = productStore((s) => s.setCategory);
  const productQuery = productStore((s) => s.productQuery);
  const { colorMode } = useColorMode();
  return (
    <>
      <List>
        <ListItem>
          <HStack spacing={5} mb={2}>
            <Image src={allCategory} boxSize={"40px"} borderRadius={5} />
            <Button
              fontSize={"lg"}
              fontWeight={productQuery.category === "" ? "bold" : "light"}
              color={colorMode === "light" ? "black" : "white"}
              whiteSpace="normal"
              textAlign="left"
              variant={"link"}
              onClick={() => setCategory("")}
            >
              All Category
            </Button>
          </HStack>
        </ListItem>
        {categories.map((category, index) => (
          <ListItem mb={2} key={index}>
            <HStack spacing={5}>
              <Image src={category.img} boxSize={"40px"} borderRadius={5} />
              <Button
                fontSize={"lg"}
                fontWeight={
                  productQuery.category === category.name ? "bold" : "light"
                }
                color={colorMode === "light" ? "black" : "white"}
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
    </>
  );
};

export default ProductSideBar;
