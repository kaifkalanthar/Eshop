import { create } from "zustand";
import { Product } from "../hooks/useProducts";

interface CheckoutStore {
  checkoutItems: Product[];
  setCheckoutItems: (products: Product[]) => void;
}

const CheckoutStore = create<CheckoutStore>((set) => ({
  checkoutItems: [] as Product[],
  setCheckoutItems: (product) => set(() => ({ checkoutItems: product })),
}));

export default CheckoutStore;
