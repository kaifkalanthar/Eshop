import { create } from "zustand";

interface ProductQuery {
  searchQuery: string;
  category: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setSearchQuery: (searchQuery: string) => void;
  setCategory: (category: string) => void;
}

const productStore = create<ProductQueryStore>((set) => ({
  productQuery: {
    searchQuery: "",
    category: "",
  },
  setSearchQuery: (searchQuery) =>
    set(() => ({
      productQuery: { category: "", searchQuery },
    })),
  setCategory: (category) =>
    set(() => ({
      productQuery: { searchQuery: "", category },
    })),
}));

export default productStore;
