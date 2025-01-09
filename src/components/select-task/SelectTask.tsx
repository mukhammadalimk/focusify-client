"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { useState } from "react";
import TasksPanel from "./TasksPanel";

const SelectTask = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const onOpenHandler = () => {
    const ipadWrapper = document.getElementById("ipad-pro") as HTMLDivElement;
    setHeight((ipadWrapper.clientHeight / 100) * 78);
    setIsPanelOpen(true);
  };

  const onClosePanel = () => setIsPanelOpen(false);

  return (
    <>
      <TasksPanel
        isPanelOpen={isPanelOpen}
        onClose={onClosePanel}
        height={height}
      />

      <div
        className="bg-[#FAFAFA] dark:bg-[#1F222A] px-5 py-[18px] rounded-[10px] flex justify-between items-center cursor-pointer w-full max-w-[500px] mx-auto"
        onClick={onOpenHandler}
      >
        <span className="font-normal text-[18px] leading-[1.6] tracking-[0.2px] text-[#9E9E9E]">
          Select Task
        </span>

        <ArrowDown className="fill-[#212121] dark:fill-[#FFFFFF]" />
      </div>
    </>
  );
};

export default SelectTask;
