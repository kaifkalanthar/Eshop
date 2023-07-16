import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import productStore from "../../store/ProductStore";
import { debounce } from "lodash";

const SearchInput = () => {
  const setSearchQuery = productStore((s) => s.setSearchQuery);
  const searchRef = useRef<HTMLInputElement>(null);

  const debounceSearch = debounce((searchValue) => {
    setSearchQuery(searchValue);
  }, 800);

  const handleSearchInput = () => {
    if (searchRef.current) {
      const searchValue = searchRef.current.value;
      debounceSearch(searchValue);
    }
  };

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
          borderRadius={20}
          placeholder="Search for perfumes, shoes and more..."
          ref={searchRef}
          onChange={handleSearchInput}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
