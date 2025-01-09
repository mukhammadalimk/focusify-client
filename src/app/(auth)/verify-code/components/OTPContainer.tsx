"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OTPContainer = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        renderInput={(props, index) => {
          return (
            <motion.input
              {...props}
              custom={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              id={`otp-input-${index + 1}`}
            />
          );
        }}
        inputStyle="text-[#212121] dark:text-[#ffffff] bg-[#FAFAFA] dark:bg-[#1F222A] font-bold text-[24px] leading-[1.6] rounded-[12px] focus-visible:!scale-[0.97] focus-visible:!border-[#FF6347] focus-visible:!border-[2px] border border-[#EEEEEE] dark:border-[#35383F] outline-none h-[50px] !w-[50px]  md:h-[70px] md:!w-[70px] break_400:h-[60px] break_400:!w-[60px]"
        containerStyle="w-full max-w-[400px] flex justify-around mx-auto gap-2"
      />
    </div>
  );
};

export default OTPContainer;
