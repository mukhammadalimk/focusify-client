"use client";
import Link from "next/link";
import MainContent from "./components/MainContent";
import SelectTask from "@/components/select-task/SelectTask";
import LogoSmallIcon from "@/components/icons/LogoSmallIcon";
import PomodoroActionMenu from "./components/PomodoroActionMenu";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import { NotificationIcon } from "@/components/icons";

const HomePage = () => {
  return (
    <div className="h-screen md:h-[854px]">
      <TopNavbarWrapper>
        <LogoSmallIcon className="text-[#FF6347]" />

        <h4 className="font-bold header-4 md:text-[28px] text-white">
          Focusify
        </h4>

        <Link href="/notifications">
          <NotificationIcon />
        </Link>
      </TopNavbarWrapper>

      <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
        <div className="flex-1">
          <div className="px-3 md:px-4 grid grid-rows-[max-content_1fr_max-content] gap-8 h-full py-[75px] md:pb-[85px]">
            <SelectTask selected />

            <MainContent />

            <PomodoroActionMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
