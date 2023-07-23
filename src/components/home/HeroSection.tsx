import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImgOne from "../../assets/BannerImage/bannerImgOne.svg";
import bannerImgOneMob from "../../assets/BannerImage/bannerImgOneMob.svg";
import bannerImgTwoMob from "../../assets/BannerImage/bannerImgTwoMob.svg";
import bannerImgThreeMob from "../../assets/BannerImage/bannerImgThreeMob.svg";
import bannerImgThree from "../../assets/BannerImage/bannerImgThree.svg";
import bannerImgTwo from "../../assets/BannerImage/bannerImgTwo.svg";

import { Box, Image, Show } from "@chakra-ui/react";
import { ReactChild } from "react";

const HeroSection: React.FC = () => {
  const carouselItems: ReactChild[] = [
    <Box key="image1">
      <Show above="sm">
        <Image src={bannerImgOne} alt="Image 1" />
      </Show>
      <Show below="sm">
        <Image src={bannerImgOneMob} alt="Image 1" />
      </Show>
    </Box>,
    <Box key="image2">
      <Show above="sm">
        <Image src={bannerImgTwo} alt="Image 1" />
      </Show>
      <Show below="sm">
        <Image src={bannerImgTwoMob} alt="Image 1" />
      </Show>
    </Box>,
    <Box key="image3">
      <Show above="sm">
        <Image src={bannerImgThree} alt="Image 1" />
      </Show>
      <Show below="sm">
        <Image src={bannerImgThreeMob} alt="Image 1" />
      </Show>
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
