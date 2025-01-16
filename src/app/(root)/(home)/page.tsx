"use client";
import Link from "next/link";
import MainContent from "./components/MainContent";
import SelectTask from "@/components/select-task/SelectTask";
import NotificationIcon from "@/components/icons/NotificationIcon";
import LogoSmallIcon from "@/components/icons/LogoSmallIcon";

const HomePage = () => {
  return (
    <div className="bg-[#FF6347] flex-1 h-full px-3 md:px-4 pt-3 flex flex-col">
      <div className="flex justify-between items-center">
        <LogoSmallIcon className="text-white" />

        <h4 className="font-bold header-4 md:text-[28px] text-white">
          Focusify
        </h4>

        <Link href="/notifications">
          <NotificationIcon />
        </Link>
      </div>

      <div className="mt-6 flex flex-col flex-1 pb-[80px] md:pb-[95px]">
        <SelectTask />

        <MainContent />
      </div>
    </div>
  );
};

export default HomePage;
