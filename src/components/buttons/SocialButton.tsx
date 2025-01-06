import React, { ReactElement } from "react";

const SocialButton = ({ text, icon }: SocialButtonProps) => {
  return (
    <button className="px-4 h-[58px] border border-[#EEEEEE] dark:border-[#35383F] rounded-full flex items-center cursor-pointer w-full max-w-[400px] mx-auto bg-[#fff] dark:bg-[#1F222A] hover hover:bg-[#f6f7f8] dark:hover:bg-[#333333] transition-all transform active:scale-[0.99] will-change-transform">
      {icon}
      <span className="flex-1 text-center -ml-6 text-[18px] font-bold tracking-[0.2px] text-[#212121] dark:text-[#fff]">
        Continue with {text}
      </span>
    </button>
  );
};

interface SocialButtonProps {
  text: string;
  icon: ReactElement;
}

export default SocialButton;
