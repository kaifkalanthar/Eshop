import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import productStore from "../store/ProductStore";

const SearchInput = () => {
  const setSearchQuery = productStore((s) => s.setSearchQuery);
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) setSearchQuery(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search perfume, shoes and more..."
          borderRadius={20}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
