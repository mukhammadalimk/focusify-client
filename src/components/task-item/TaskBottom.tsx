import React from "react";
import SunIcon from "../icons/SunIcon";
import PlayCircleIcon from "../icons/PlayCircleIcon";
import { TaskItemProps } from "./TaskItem";
import { FlagIcon, SuitcaseIcon, TimerCircleIcon } from "../icons";

const TaskBottom = ({
  numberOfPomodoros,
  projectName,
  completed,
  deleted,
}: TaskBottomProps) => {
  return (
    <div className="flex justify-between gap-3 break_400:gap-4 items-center">
      <div className="flex gap-3 break_400:gap-4 items-center">
        <div className="inline-flex gap-1.5 items-center">
          <TimerCircleIcon className="break_600:w-6 break_600:h-6 text-[#FF6347]" />
          <span className="font-normal text-[13px] break_600:text-[15px] leading-[1.6] tracking-[0.2px] text-[#616161] dark:text-[#EEEEEE]">
            {numberOfPomodoros}
          </span>
        </div>

        <SunIcon className="break_600:w-6 break_600:h-6" />

        <FlagIcon className="break_600:w-6 break_600:h-6" />

        <div className="inline-flex gap-1.5 items-center">
          <SuitcaseIcon className="break_600:!w-6 break_600:!h-6" />
          <span className="font-normal text-[13px] break_600:text-[15px] leading-[1.6] tracking-[0.2px] text-[#616161] dark:text-[#EEEEEE] truncate">
            {projectName}
          </span>
        </div>
      </div>

      {!completed && !deleted && (
        <div>
          <PlayCircleIcon className="cursor-pointer w-6 h-6 break_400:w-auto break_400:h-auto" />
        </div>
      )}
    </div>
  );
};

type TaskBottomProps = Pick<
  TaskItemProps,
  "projectName" | "numberOfPomodoros" | "completed" | "deleted"
>;

export default TaskBottom;
