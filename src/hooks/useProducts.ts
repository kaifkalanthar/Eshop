import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import productStore from "../store/ProductStore";
import ms from "ms";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity: number;
}

const useProducts = () => {
  const productQuery = productStore((s) => s.productQuery);
  const apiClient = new ApiClient<Product>(
    productQuery.category !== ""
      ? `products/category/${productQuery.category}`
      : productQuery.searchQuery !== ""
      ? "products/search"
      : "products"
  );
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    error,
  } = useInfiniteQuery<FetchResponse<Product>, Error>({
    queryKey: ["products", productQuery],
    queryFn: ({ pageParam = 0 }) =>
      apiClient.getAll({
        params: {
          skip: pageParam,
          limit: 20,
          q: productQuery.searchQuery,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (lastPage) => {
      const currentPageCount = lastPage.skip + 20;
      if (currentPageCount < lastPage.total + 1) {
        return currentPageCount;
      }
      return undefined;
    },
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    error,
  };
};

export default useProducts;
