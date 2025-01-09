import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import PlayIcon from "@/assets/icons/play.svg";
import PomodoroActionMenu from "./PomodoroActionMenu";

const CircleTimer = () => {
  return (
    <div className="flex flex-1 flex-col mt-10 gap-10 items-center justify-between pb-6">
      <div className="relative">
        {/* Big background bottom circle */}
        <div className="bg-white dark:bg-[#181A20] absolute xsm:h-[800px] xsm:w-[800px] sm:h-[950px] sm:w-[950px] break_500:h-[1100px] break_500:w-[1100px] break_600:h-[1400px] break_600:w-[1400px]  break_700:h-[1400px] break_700:w-[1400px] rounded-full top-[145px] sm:top-[180px] left-1/2 -translate-x-1/2 z-0"></div>

        {/* Outer circle */}
        <div className="should-be-shown bg-white dark:bg-[#1F222A] h-[280px] w-[280px] break_360:w-[320px] break_360:h-[320px] sm:w-[348px] sm:h-[348px] transition-all duration-300 rounded-full grid place-items-center shadow-[0px_16px_50px_0px_rgba(4,6,15,0.16)] z-10 relative">
          {/* Inner circle */}
          <div className="bg-white dark:bg-[#1F222A] h-[250px] w-[250px] break_360:w-[280px] break_360:h-[280px] sm:w-[300px] sm:h-[300px] transition-all duration-300 rounded-full border-[15px] break_360:border-[20px] sm:border-[24px] border-[#FF6347] grid place-items-center z-10">
            <div className="text-center">
              <h1 className="font-bold text-[50px] sm:text-[64px] transition-all duration-300 text-[#212121] dark:text-[#FFFFFF] leading-[1.2032]">
                25:00
              </h1>
              <span className="font-normal text-[16px] sm:text-[18px] transition-all duration-300 leading-[1.6] tracking-[0.2px] text-[#616161] dark:text-[#EEEEEE]">
                No sessions
              </span>
            </div>
          </div>
        </div>
      </div>

      <PrimaryButton
        text="Start to Focus"
        className="bg-[#FF6347] text-[#FFFFFF] max-w-[200px] break_360:max-w-[250px] flex "
        icon={<PlayIcon className="mr-4" />}
      />

      <PomodoroActionMenu />
    </div>
  );
};

export default CircleTimer;
