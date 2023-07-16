import Product from "./Product";

export default interface SavedProducts {
  userId: string;
  cart: Product[];
  orderedProducts: Product[];
}
