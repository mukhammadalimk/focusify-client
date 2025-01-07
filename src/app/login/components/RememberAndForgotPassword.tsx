"use client";
import { useState } from "react";
import VectorIcon from "@/assets/icons/vector.svg";

const RememberAndForgotPassword = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const toggleIcon = () => {
    setRememberMe((prev) => !prev);
  };

  return (
    <div className="flex justify-between max-w-[400px] w-full mt-1">
      <label
        className="relative font-semibold text-[18px] leading-[1.6] tracking-[0.2] flex items-center gap-4 cursor-pointer"
        onClick={toggleIcon}
      >
        <div
          className={`w-6 h-6 rounded-md border-3 border-[#FF6347] transition-colors duration-300 ${
            rememberMe ? "bg-[#FF6347]" : "bg-transparent"
          }`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <VectorIcon
              className={`w-full h-full transform transition-all duration-300 ${
                rememberMe ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
          </div>
        </div>
        Remember me
      </label>

      <a
        href="/forgot-password"
        className="font-semibold text-[18px] leading-[1.6] tracking-[0.2] text-[#ff6347] dark:text-[#ffffff] cursor-pointer"
      >
        Forgot Password?
      </a>
    </div>
  );
};

export default RememberAndForgotPassword;
