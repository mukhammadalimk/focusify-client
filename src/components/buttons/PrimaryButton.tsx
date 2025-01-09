import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const PrimaryButton = ({
  text,
  className,
  link,
  onClick,
  disabled = false,
  icon,
}: PrimaryButtonProps) => {
  return (
    <button
      className={twMerge(
        "h-[58px] rounded-full cursor-pointer w-full max-w-[400px] transition-all transform active:scale-[0.99] will-change-transform text-center text-[18px] font-bold tracking-[0.2px]",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="w-full h-full flex items-center justify-center text-[18px] md:text-[22px]">
        {icon}
        <a href={link}>{text}</a>
      </span>
    </button>
  );
};

interface PrimaryButtonProps {
  text: string;
  // Optional
  className?: string;
  link?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
}

export default PrimaryButton;
