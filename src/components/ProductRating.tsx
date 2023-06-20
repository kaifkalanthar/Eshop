import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const ProductRating = ({ rating }: Props) => {
  const color = rating > 4.5 ? "green" : rating > 4.0 ? "yellow" : "";
  return (
    <Badge paddingX={2} colorScheme={color}>
      {rating}
    </Badge>
  );
};

export default ProductRating;
