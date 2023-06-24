import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import categories from "../data/categories";
import productStore from "../store/ProductStore";

const CategorySelector = () => {
  const { productQuery, setCategory } = productStore();
  return (
    <Menu>
      <MenuButton
        as={Button}
        key={1}
        rightIcon={<BsChevronDown />}
        colorScheme="pink"
        width="80%"
      >
        Category{" "}
        {productQuery.category !== "" ? `: ${productQuery.category}` : ""}
      </MenuButton>
      <MenuList height="70vh" overflowY="scroll">
        {categories.map((category, index) => (
          <MenuItem key={index} onClick={() => setCategory(category)}>
            {category}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;
