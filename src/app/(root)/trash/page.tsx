import { ArrowLeftIcon, ThreeDotsIcon } from "@/components/icons";
import TaskItem from "@/components/task-item/TaskItem";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import { delegedtasks } from "@/data";
import Link from "next/link";
import React from "react";

const Trash = () => {
  return (
    <div className="w-full bg-white dark:bg-[#181A20] h-screen md:h-[854px]">
      <TopNavbarWrapper>
        <Link href="/manage">
          <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
        </Link>

        <h4 className="font-bold header-4">Trash</h4>

        <ThreeDotsIcon />
      </TopNavbarWrapper>

      <div className="overflow-y-auto h-full no-scrollbar pb-[80px] md:pb-[90px] pt-[80px] px-3 md:px-4">
        <div className="grid gap-6">
          {delegedtasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
          {delegedtasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
          {delegedtasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
          {delegedtasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
          {delegedtasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trash;
