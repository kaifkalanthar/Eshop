import { create } from "zustand";
import { Product } from "../hooks/useProducts";

interface CheckoutStore {
  checkoutItems: Product[];
  setCheckoutItems: (products: Product[]) => void;
  setQuantity: (cart: Product) => void;
}

const CheckoutStore = create<CheckoutStore>((set) => ({
  checkoutItems: [] as Product[],
  setCheckoutItems: (product) => set(() => ({ checkoutItems: product })),
  setQuantity: (cart) =>
    set((store) => ({ checkoutItems: [...store.checkoutItems, cart] })),
}));

export default CheckoutStore;
