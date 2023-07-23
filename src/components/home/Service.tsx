import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  Image,
  GridItem,
} from "@chakra-ui/react";

import ServiceOne from "../../assets/serviceOne.jpg";
import ServiceTwo from "../../assets/serviceTwo.jpg";
import ServiceThree from "../../assets/serviceThree.jpg";

const Service = () => {
  const services = [
    {
      title: "Freq asked Questions",
      image: ServiceOne,
    },
    {
      title: "Online Payment Process",
      image: ServiceTwo,
    },
    {
      title: "Home delivery options",
      image: ServiceThree,
    },
  ];
  return (
    <Box mb={10}>
      <Heading textAlign={"center"} mb={[5, 10]} fontWeight={"medium"}>
        Services to Help You Shop
      </Heading>
      <SimpleGrid
        columns={[1, 2, 3]}
        width={["100%", "100%", "70%"]}
        spacing={10}
        mx={"auto"}
      >
        {services.map((service, index) => (
          <GridItem key={index}>
            <Card overflow={"hidden"}>
              <Image src={service.image} height={"280px"} />
              <CardBody>
                <Heading fontSize={"3xl"}>{service.title}</Heading>
                <Text>Updates on safe shopping in our stores</Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Service;
