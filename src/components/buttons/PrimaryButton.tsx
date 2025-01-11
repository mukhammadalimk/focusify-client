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
        "h-[58px] rounded-full cursor-pointer w-full max-w-[400px] transition-all transform active:scale-[0.98] will-change-transform text-center body-x-large md:text-[22px] font-bold",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="w-full h-full flex items-center justify-center">
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
