import {
  Box,
  Divider,
  GridItem,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  AiFillDribbbleCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import FooterLogo from "../assets/footerLogo.svg";
import React from "react";

const Footer = () => {
  const listItems = [
    [
      "Product",
      "Overview",
      "Features",
      "Solutions",
      "Tutorials",
      "Pricing",
      "Releases",
    ],
    ["Company", "About Us", "Careers", "Press", "News", "Media Kit", "Contact"],
    [
      "Resources",
      "Newsletter",
      "Events",
      "Help centre",
      "Tutorials",
      "Support",
    ],
    ["Legal", "Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
  ];
  return (
    <Box
      as="footer"
      borderTop="1px solid gary.400"
      p={5}
      mt={[5, 10]}
      bg={"black"}
      color={"white"}
    >
      <SimpleGrid
        width={["100%", "80%"]}
        mt={5}
        columns={[1, 2]}
        templateAreas={{
          base: `'main'`,
          lg: `'main' 'main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "30% 1fr",
        }}
      >
        <GridItem px={[0, 10]} mb={5}>
          <Box width={"80%"}>
            <Image src={FooterLogo} mb={5} />
            <Text>
              {" "}
              Delivering Amazing products that makes this world happy
            </Text>
          </Box>
        </GridItem>
        <Show above="md">
          <GridItem width={"100%"}>
            <SimpleGrid
              display={"flex"}
              justifyContent={"space-between"}
              top={1}
              columns={[2, 4]}
            >
              {listItems.map((menuItems, index) => (
                <GridItem key={index}>
                  <Text>{menuItems[0]}</Text>
                  {menuItems.slice(1).map((item, index) => (
                    <React.Fragment key={index}>
                      <List
                        listStyleType={"none"}
                        fontWeight={"bold"}
                        spacing={3}
                        my={2}
                      >
                        <ListItem>{item}</ListItem>
                      </List>
                    </React.Fragment>
                  ))}
                </GridItem>
              ))}
            </SimpleGrid>
          </GridItem>
        </Show>
      </SimpleGrid>
      <Divider my={5} />
      <HStack
        justify={"space-between"}
        flexDirection={["column", "row"]}
        columnGap={5}
        px={5}
      >
        <Text>2044 TrendiFy. All rights reserved.</Text>
        <HStack>
          <Icon boxSize={"45px"} as={AiOutlineGithub} />
          <Icon boxSize={"45px"} as={AiOutlineLinkedin} />
          <Icon boxSize={"45px"} as={AiFillDribbbleCircle} />
          <Icon boxSize={"45px"} as={AiOutlineTwitter} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
