import { ArrowLeftIcon, ThreeDotsIcon } from "@/components/icons";
import SelectTask from "@/components/select-task/SelectTask";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import Link from "next/link";
import React from "react";

const TaskDetails = () => {
  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#181A20] h-screen md:h-[854px]">
      <TopNavbarWrapper>
        <Link href="/manage">
          <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
        </Link>

        <h4 className="font-bold header-4">Task</h4>

        <ThreeDotsIcon />
      </TopNavbarWrapper>

      <div className="overflow-y-auto h-full no-scrollbar pb-[80px] md:pb-[90px] pt-[80px] px-3 md:px-4">
        <SelectTask selected />
      </div>
    </div>
  );
};

export default TaskDetails;
