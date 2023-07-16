import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import Features from "../components/home/Features";
import TopProducts from "../components/home/TopProducts";
import { features } from "../data/features";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <Features feature={features[0]} />
      <TopProducts />
      <Features feature={features[1]} />
    </>
  );
};

export default HomePage;
