import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImgOne from "../../assets/BannerImage/bannerImgOne.webp";
import bannerImgTwo from "../../assets/BannerImage/bannerImgTwo.webp";
import bannerImgThree from "../../assets/BannerImage/bannerImgThree.webp";
import { ReactChild } from "react";
import { Box } from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  const carouselItems: ReactChild[] = [
    <Box key="image1">
      <img src={bannerImgOne} alt="Image 1" />
    </Box>,
    <Box key="image2">
      <img src={bannerImgTwo} alt="Image 2" />
    </Box>,
    <Box key="image3">
      <img src={bannerImgThree} alt="Image 3" />
    </Box>,
  ];
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
    >
      {carouselItems}
    </Carousel>
  );
};

export default HeroSection;
