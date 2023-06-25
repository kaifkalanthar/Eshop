import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import Features from "../components/Features";
import TopProducts from "../components/TopProducts";
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
