"use client";
import { motion, MotionProps } from "framer-motion";

const IntroTextsBox = ({
  mainText,
  subText,
  className,
  ...rest
}: IntroTextsBoxProps) => {
  return (
    <motion.div className={className} {...rest}>
      <h3 className="font-bold text-[24px] break_400:text-[32px] leading-[1.6]">
        {mainText}
      </h3>
      <p className="font-normal body-x-large text-[#616161] dark:text-[#eee] ">
        {subText}
      </p>
    </motion.div>
  );
};

interface IntroTextsBoxProps extends MotionProps {
  mainText: string;
  subText: string;
  className: string;
}

export default IntroTextsBox;
