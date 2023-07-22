import { Box, Heading } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1107 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1107, min: 667 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carouselSettings = {
    additionalTransfrom: 0,
    arrows: true,
    grabCursor: true,
    autoPlay: false,
    autoPlaySpeed: 1000,
    centerMode: false,
    className: "",
    customButtonGroup: null,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    partialVisible: false,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
  };

  return (
    <Box my={5}>
      <Heading fontWeight="medium" textAlign="center" padding={10}>
        Category
      </Heading>
      <Box zIndex={599}>
        <Carousel responsive={responsive} {...carouselSettings}>
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default CategorySection;
