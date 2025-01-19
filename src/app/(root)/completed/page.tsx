import Divider from "@/components/Divider";
import { ArrowLeftIcon, ThreeDotsIcon } from "@/components/icons";
import TaskItem from "@/components/task-item/TaskItem";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import { completedTasks } from "@/data";
import Link from "next/link";
import React from "react";

const Completed = () => {
  return (
    <div className="w-full bg-white dark:bg-[#181A20] h-screen md:h-[854px]">
      <TopNavbarWrapper>
        <Link href="/manage">
          <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
        </Link>

        <h4 className="font-bold header-4">Completed</h4>

        <ThreeDotsIcon />
      </TopNavbarWrapper>

      <div className="overflow-y-auto h-full no-scrollbar pb-[80px] md:pb-[90px] pt-[80px] px-3 md:px-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
              Today
            </span>
            <Divider />
          </div>
          <div className="flex gap-3">
            <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
              Focus: 2h 5m
            </span>
            <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
              Completed: 2 tasks
            </span>
          </div>
        </div>

        <div className="grid gap-6 my-6">
          {completedTasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}

          {completedTasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
              Yesterday
            </span>
            <Divider />
          </div>
          <div className="flex gap-3">
            <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
              Focus: 2h 5m
            </span>
            <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
              Completed: 2 tasks
            </span>
          </div>
        </div>

        <div className="grid gap-6 mt-6">
          {completedTasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}

          {completedTasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Completed;
