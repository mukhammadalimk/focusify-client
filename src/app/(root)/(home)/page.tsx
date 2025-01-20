"use client";
import Link from "next/link";
import MainContent from "./components/MainContent";
import SelectTask from "@/components/select-task/SelectTask";
import NotificationIcon from "@/components/icons/NotificationIcon";
import LogoSmallIcon from "@/components/icons/LogoSmallIcon";
import PomodoroActionMenu from "./components/PomodoroActionMenu";

const HomePage = () => {
  return (
    <div className="bg-[#FF6347] h-screen md:h-[854px]">
      <div className="flex justify-between items-center h-[60px] w-full fixed md:absolute top-0 left-0 px-3 md:px-4 bg-[#FF6347] z-[20]">
        <LogoSmallIcon className="text-white" />

        <h4 className="font-bold header-4 md:text-[28px] text-white">
          Focusify
        </h4>

        <Link href="/notifications">
          <NotificationIcon />
        </Link>
      </div>

      <div className="flex-1 h-full px-3 md:px-4 pb-[80px] md:pb-[90px] pt-[80px] flex flex-col ">
        <div className="flex flex-col flex-1">
          <SelectTask />

          <MainContent />
        </div>

        <PomodoroActionMenu />
      </div>
    </div>
  );
};

export default HomePage;
