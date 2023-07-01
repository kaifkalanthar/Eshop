import { create } from "zustand";
import { Product } from "../hooks/useProducts";

interface OrderedProductStore {
  orderedProducts: Product[];
  setOrderedProducts: (products: Product[]) => void;
}

const OrderedProductStore = create<OrderedProductStore>((set) => ({
  orderedProducts: [] as Product[],
  setOrderedProducts: (product) => set(() => ({ orderedProducts: product })),
}));

export default OrderedProductStore;
