import { ArrowLeftIcon, ThreeDotsIcon } from "@/components/icons";
import Input, { IconName } from "@/components/Input";
import DayTasksInfo from "@/components/shared/DayTasksInfo";
import TaskItem from "@/components/task-item/TaskItem";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import { tasks } from "@/data";
import Link from "next/link";
import React from "react";

const ThisWeek = () => {
  return (
    <div className="w-full bg-white dark:bg-[#181A20] h-screen md:h-[854px]">
      <TopNavbarWrapper>
        <Link href="/manage">
          <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
        </Link>

        <h4 className="font-bold header-4">This Week</h4>

        <ThreeDotsIcon />
      </TopNavbarWrapper>

      <div className="overflow-y-auto h-full no-scrollbar pb-[80px] md:pb-[90px] pt-[80px] px-3 md:px-4">
        <DayTasksInfo />

        <Input
          type="text"
          text="Add a Task..."
          placeholder="Add a Task..."
          id="add-task"
          iconName={IconName.Plus}
          withoutLabel
          inputStyle="font-normal"
          containerStyle="max-w-none my-6"
        />

        <div className="grid gap-6">
          {tasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThisWeek;
