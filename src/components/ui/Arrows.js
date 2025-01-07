import { motion, circIn, useTime, useTransform } from "motion/react";
import { ChevronDown } from 'lucide-react';

function Arrows() {
  const time = useTime();
  const distance = 10
  const interval = 4;
  const y = useTransform(time, (latest) => Math.sin((latest / 1000) * interval) * distance, { clamp: false, ease: circIn })
  return (
    <motion.div className="flex p-4 justify-evenly g-12 items-center"
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: [0, 0.7, 0.2, 1],
      }}
    >
      <Icon />
      <Icon />
      <Icon />
    </motion.div>

  )
}

function Icon() {
  return (
    <ChevronDown
      className="size-8 text-primary mr-1 ml-4" />
  )
}

export default Arrows;
