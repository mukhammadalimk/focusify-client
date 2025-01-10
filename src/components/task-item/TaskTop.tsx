import { TaskItemProps } from "./TaskItem";
import CircleEmptyIcon from "../icons/CircleEmptyIcon";
import CircleCheckmarkIcon from "../icons/CircleCheckmarkIcon";

const TaskTop = ({ taskTitle, completed }: TaskTopProps) => {
  return (
    <div className="flex justify-between gap-3 items-center">
      <h6
        className={`font-semibold text-[16px] break_500:text-[20px] break_600:text-[22px] leading-[1.6]${
          completed ? " text-[#9E9E9E] line-through" : ""
        }`}
      >
        {taskTitle}
      </h6>

      {completed ? <CircleCheckmarkIcon /> : <CircleEmptyIcon />}
    </div>
  );
};

type TaskTopProps = Pick<TaskItemProps, "taskTitle" | "completed">;

export default TaskTop;
