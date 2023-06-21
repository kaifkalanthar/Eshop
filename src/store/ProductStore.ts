import { create } from "zustand";

interface ProductQuery {
  limit: number;
  searchQuery: string;
  category: string;
}

interface ProductQueryStore {
  productQuery: ProductQuery;
  setProductLimit: (limit: number) => void;
  setSearchQuery: (searchQuery: string) => void;
  setCategory: (category: string) => void;
}

const productStore = create<ProductQueryStore>((set) => ({
  productQuery: {
    limit: 10,
    searchQuery: "",
    category: "",
  },
  setProductLimit: (limit) =>
    set((store) => ({
      productQuery: { ...store.productQuery, limit },
    })),
  setSearchQuery: (searchQuery) =>
    set(() => ({
      productQuery: { limit: 0, category: "", searchQuery },
    })),
  setCategory: (category) =>
    set(() => ({
      productQuery: { limit: 0, searchQuery: "", category },
    })),
}));

export default productStore;
