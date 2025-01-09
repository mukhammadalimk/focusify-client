import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import PlayIcon from "@/assets/icons/play.svg";
import PomodoroActionMenu from "./PomodoroActionMenu";

const CircleTimer = () => {
  return (
    <div className="flex flex-1 flex-col mt-10 gap-10 items-center justify-between">
      <div className="relative">
        {/* Big background bottom circle */}
        <div className="bg-white dark:bg-[#181A20] absolute h-[800px] w-[800px] break_400:h-[950px] break_400:w-[950px] break_500:h-[1100px] break_500:w-[1100px] break_600:h-[1400px] break_600:w-[1400px] break_700:h-[1400px] break_700:w-[1400px] rounded-full top-[145px] break_400:top-[180px] left-1/2 -translate-x-1/2 z-0"></div>

        {/* Outer circle */}
        <div className="should-be-shown bg-white dark:bg-[#1F222A] w-[320px] h-[320px] break_400:w-[348px] break_400:h-[348px] transition-all duration-300 rounded-full grid place-items-center shadow-[0px_16px_50px_0px_rgba(4,6,15,0.16)] z-10 relative">
          {/* Inner circle */}
          <div className="bg-white dark:bg-[#1F222A] w-[280px] h-[280px] break_400:w-[300px] break_400:h-[300px] transition-all duration-300 rounded-full border-[15px] sm:border-[20px] break_400:border-[24px] border-[#FF6347] grid place-items-center z-10">
            <div className="text-center">
              <h1 className="font-bold text-[50px] break_400:text-[64px] transition-all duration-300 text-[#212121] dark:text-[#FFFFFF] leading-[1.2032]">
                25:00
              </h1>
              <span className="font-normal text-[16px] break_400:text-[18px] transition-all duration-300 leading-[1.6] tracking-[0.2px] text-[#616161] dark:text-[#EEEEEE]">
                No sessions
              </span>
            </div>
          </div>
        </div>
      </div>

      <PrimaryButton
        text="Start to Focus"
        className="bg-[#FF6347] text-[#FFFFFF] max-w-[250px] flex "
        icon={<PlayIcon className="mr-4" />}
      />

      <PomodoroActionMenu />
    </div>
  );
};

export default CircleTimer;
