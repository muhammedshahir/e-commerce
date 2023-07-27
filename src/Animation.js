import React from "react";
import { motion } from "framer-motion";

const Animation = () => {
  return (
    <div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ duration: 2 }}
        onUpdate={(latest) => console.log(latest)}
      />
      <motion.div
        animate={{ color: "#000" }}
        transition={{ duration: 2 }}
        onUpdate={(latest) => console.log(latest)}
      />
    </div>
  );
};

export default Animation;
