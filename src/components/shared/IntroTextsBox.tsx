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
      <h3 className="font-bold sm:text-[32px] leading-[1.6] text-[#212121] dark:text-[#ffffff] xsm:text-[24px]">
        {mainText}
      </h3>
      <p className="font-normal sm:text-[18px] leading-[1.6] tracking-[0.2px] text-[#616161] dark:text-[#eee] xsm:text-[16px]">
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
