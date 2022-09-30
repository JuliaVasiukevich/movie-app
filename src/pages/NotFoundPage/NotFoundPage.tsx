import { motion } from "framer-motion";
import { Ghost } from "react-kawaii";
import { Color } from "ui";
import { Wrapper, Title } from "./styles";

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.2,
          repeatType: "reverse",
        }}
      >
        <Ghost size={400} mood="sad" color={Color.Primary} />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 2,
        }}
      >
        <Title> Oooops! Page not found!</Title>
      </motion.div>
    </Wrapper>
  );
};
