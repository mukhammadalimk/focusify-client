"use client";
import { useState } from "react";
import TaskSelected from "./TaskSelected";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import TasksPanel from "../panels/TasksPanel";

const SelectTask = ({ selected = false }: { selected?: boolean }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const onOpenHandler = () => {
    if (selected) return;
    setIsPanelOpen(true);
  };

  const onClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <>
      {isPanelOpen && (
        <TasksPanel isPanelOpen={isPanelOpen} onClose={onClosePanel} />
      )}

      <div
        className={`select-task${selected ? "" : " cursor-pointer"}`}
        onClick={onOpenHandler}
      >
        {selected ? (
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
