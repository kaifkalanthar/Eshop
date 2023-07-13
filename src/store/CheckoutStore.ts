import { create } from "zustand";
import { Product } from "../hooks/useProducts";

interface CheckoutStore {
  checkoutItems: Product[];
  setCheckoutItems: (products: Product[]) => void;
  increaseQuantity: (product: Product) => void;
  decreaseQuantity: (product: Product) => void;
}

const CheckoutStore = create<CheckoutStore>((set) => ({
  checkoutItems: [] as Product[],
  setCheckoutItems: (products) => set(() => ({ checkoutItems: products })),
  increaseQuantity: (product) => {
    set((store) => {
      const updatedItems = store.checkoutItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity:
              item.quantity < 10 ? item.quantity + 1 : !item.quantity ? 1 : 10,
          };
        }
        return item;
      });
      return { checkoutItems: updatedItems };
    });
  },
  decreaseQuantity: (product) => {
    set((store) => {
      const updatedItems = store.checkoutItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        }
        return item;
      });
      return { checkoutItems: updatedItems };
    });
  },
}));

export default CheckoutStore;
