import { Product } from "../hooks/useProducts";
import ApiClient from "../services/api-client";
import CustomButton from "./CustomButton";

interface Props {
  label: string;
  data: Product[];
}
const CheckoutButton = ({ data, label }: Props) => {
  const handleCheckout = (selectedItems: Product[]) => {
    const apiClient = new ApiClient("/stripe/create-checkout-session");
    apiClient.checkout(selectedItems);
  };

  return (
    <CustomButton handleOnclick={() => handleCheckout(data)} width="100%">
      {label}
    </CustomButton>
  );
};

export default CheckoutButton;
