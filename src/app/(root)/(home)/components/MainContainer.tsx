"use client";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import PlayIcon from "@/assets/icons/play.svg";
import PomodoroActionMenu from "./PomodoroActionMenu";
import PomodoroTimer from "./PomodoroTimer";

const MainContent = () => {
  return (
    <div className="flex flex-1 flex-col mt-10 gap-10 items-center justify-between">
      <PomodoroTimer duration={15} />

      <PrimaryButton
        text="Start to Focus"
        className="bg-[#FF6347] text-[#FFFFFF] max-w-[250px] flex "
        icon={<PlayIcon className="mr-4" />}
      />

      <PomodoroActionMenu />
    </div>
  );
};

export default MainContent;
