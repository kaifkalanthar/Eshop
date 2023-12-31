import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const ProductRating = ({ rating }: Props) => {
  const color = rating > 4.5 ? "green" : rating > 4.0 ? "yellow" : "orange";
  return (
    <Badge paddingX={2} width="40px" colorScheme={color}>
      {rating}
    </Badge>
  );
};

export default ProductRating;
