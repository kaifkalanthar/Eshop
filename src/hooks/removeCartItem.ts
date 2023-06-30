import { useMutation } from "@tanstack/react-query";
import { firebaseAxiosInstance } from "../services/api-client";
import userStore from "../store/UserStore";

const removeCartItem = () => {
  const user = userStore((s) => s.user);
  return useMutation({
    mutationFn: () => firebaseAxiosInstance.delete(`/${user.uid}.json`),
  });
};

export default removeCartItem;
