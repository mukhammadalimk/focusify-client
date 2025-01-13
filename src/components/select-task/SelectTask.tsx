"use client";
import { useState } from "react";
import TasksPanel from "./TasksPanel";
import TaskSelected from "./TaskSelected";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const taskSelected = false;

const SelectTask = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const onOpenHandler = () => {
    if (taskSelected) return;
    const ipadWrapper = document.getElementById("ipad-pro") as HTMLDivElement;
    setHeight((ipadWrapper.clientHeight / 100) * 78);
    setIsPanelOpen(true);
  };

  const onClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      <TasksPanel
        isPanelOpen={isPanelOpen}
        onClose={onClosePanel}
        height={height}
      />

      <div
        className={`select-task${taskSelected ? "" : " cursor-pointer"}`}
        onClick={onOpenHandler}
      >
        {taskSelected ? (
          <TaskSelected taskTitle="Create UI/UX for pomodoro app" />
        ) : (
          <>
            <span className="font-normal body-x-large text-[#9E9E9E]">
              Select Task
            </span>

            <ArrowDownIcon className="fill-[#212121] dark:fill-white" />
          </>
        )}
      </div>
    </>
  );
};

export default SelectTask;
