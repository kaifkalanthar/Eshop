import { Stack } from "@chakra-ui/react";
import CategorySection from "../components/home/CategorySection";
import HeroSection from "../components/home/HeroSection";
import Service from "../components/home/Service";
import TopProducts from "../components/home/TopProducts";

const HomePage = () => {
  document.title = "TrendiFy | Home";
  return (
    <Stack spacing={10}>
      <HeroSection />
      <TopProducts />
      <CategorySection />
      <Service />
    </Stack>
  );
};

export default HomePage;
