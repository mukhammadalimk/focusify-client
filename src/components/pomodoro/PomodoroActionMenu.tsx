import React from "react";

import DangerCircleIcon from "@/assets/icons/danger-circle-icon.svg";
import HourGlassIcon from "@/assets/icons/hourglass-icon.svg";
import MusicIcon from "@/assets/icons/music-icon.svg";

const PomodoroActionMenu = () => {
  return (
    <div className="flex z-10 justify-evenly w-full select-none">
      <div className="flex flex-col w-[90px] items-center gap-2 cursor-pointer transition-all transform active:scale-[0.99] will-change-transform">
        <DangerCircleIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />
        <span className="text-[#616161] dark:text-[#EEEEEE] font-medium text-[12px] sm:text-[15px] leading-[1.6] tracking-[0.2px]">
          Strict Mode
        </span>
      </div>
      <div className="flex flex-col w-[90px] items-center gap-2 cursor-pointer transition-all transform active:scale-[0.99] will-change-transform">
        <HourGlassIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />
        <span className="text-[#616161] dark:text-[#EEEEEE] font-medium text-[12px] sm:text-[15px] leading-[1.6] tracking-[0.2px]">
          Timer Mode
        </span>
      </div>
      <div className="flex flex-col w-[90px] items-center gap-2 cursor-pointer transition-all transform active:scale-[0.99] will-change-transform">
        <MusicIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />
        <span className="text-[#616161] dark:text-[#EEEEEE] font-medium text-[12px] sm:text-[15px] leading-[1.6] tracking-[0.2px]">
          White Noise
        </span>
      </div>
    </div>
  );
};

export default PomodoroActionMenu;
