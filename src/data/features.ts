import featureA from "../assets/feature_a.png";
import featureB from "../assets/feature_b.png";
import featureC from "../assets/feature_c.png";

export interface Feature {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Personalized product recommendations",
    description:
      "Utilize advanced algorithms and user data analysis to offer personalized product recommendations. Highlight how your platform understands individual preferences and helps users discover relevant products tailored to their interests, enhancing their shopping experience.",
    image: featureA,
  },
  {
    id: 2,
    title: "Multi-channel Shopping",
    description:
      "Emphasize the ability for users to seamlessly transition between different devices and platforms while maintaining a consistent shopping experience. Showcase features such as synchronized shopping carts, saved preferences, and order history accessibility across desktop, mobile, and tablet devices.",
    image: featureB,
  },
  {
    id: 3,
    title: "Interactive Virtual",
    description:
      "eCommerce niche (e.g., fashion, cosmetics, eyewear), offer an interactive virtual try-on feature. This allows users to visualize products on themselves virtually, enhancing their confidence in purchasing decisions and reducing the need for returns or exchanges.",
    image: featureC,
  },
];
