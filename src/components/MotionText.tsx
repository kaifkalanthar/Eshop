import { ReactNode } from "react";
import { Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode | string;
}
const MotionTextContainer = ({ children }: Props) => {
  const MotionText = motion(Text);
  return (
    <MotionText
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </MotionText>
  );
};

export default MotionTextContainer;
