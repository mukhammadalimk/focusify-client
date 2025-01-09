"use client";
import VectorIcon from "@/assets/icons/vector-2.svg";
import React, { useEffect, useState } from "react";
import { TaskItemProps } from "./TaskItem";

const TaskTop = ({ taskTitle }: TaskTopProps) => {
  const [completed, setCompleted] = useState(false);

  const [audio] = useState(new Audio("/audio/completed.mp3"));

  useEffect(() => {
    audio.load();
  }, [audio]);

  const toggleCompleted = () => {
    if (!completed) audio.play();
    setCompleted((prev) => !prev);
  };

  return (
    <div className="flex justify-between gap-3 items-center">
      <h6
        className={`font-semibold text-[16px] break_500:text-[20px] break_600:text-[22px] leading-[1.6] tracking-[0.2px] transition-colors duration-300${
          completed ? " text-[#9E9E9E] line-through" : ""
        }`}
      >
        {taskTitle}
      </h6>
      <div
        role="button"
        aria-label={completed ? "Mark task incomplete" : "Mark task complete"}
        className={`cursor-pointer w-5 h-5 break_400:w-6 break_400:h-6 rounded-full border-3 border-[#FF6347] transition-colors duration-300 ${
          completed ? "bg-[#ff6347]" : "bg-transparent"
        }`}
        onClick={toggleCompleted}
      >
        <div className="w-full h-full flex items-center justify-center">
          <VectorIcon
            className={`w-[80%] h-[80%] transform transition-all duration-300 ${
              completed ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

type TaskTopProps = Pick<TaskItemProps, "taskTitle">;

export default TaskTop;
