import { useState } from "react";
import { Product } from "../hooks/useProducts";
import { HStack, Image } from "@chakra-ui/react";
interface Props {
  data: Product;
}
const ImageStack = ({ data }: Props) => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Image
        src={data?.images[page]}
        marginX="auto"
        borderRadius={5}
        boxSize="80%"
      />
      <HStack py={5} spacing={5} marginX={"auto"}>
        {data?.images.map((image, index) => (
          <Image
            border={page === index ? "5px solid green" : ""}
            overflowX={"scroll"}
            cursor={"pointer"}
            key={index}
            onClick={() => setPage(index)}
            borderRadius={10}
            src={image}
            height={["50px", "60px", "65px"]}
            width={["50px", "60px", "65px"]}
          />
        ))}
      </HStack>
    </>
  );
};

export default ImageStack;
