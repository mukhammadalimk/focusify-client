import TaskTop from "./TaskTop";
import TaskTags from "./TaskTags";
import TaskBottom from "./TaskBottom";

const TaskItem = ({
  taskTitle,
  projectName,
  numberOfPomodoros,
  tags,
  completed,
  deleted,
}: TaskItemProps) => {
  return (
    <div className="w-full h-max rounded-[8px] border border-[#EEEEEE] dark:border-[#35383F] relative overflow-hidden cursor-pointer transition-all transform active:scale-[0.98] will-change-transform bg-white dark:bg-[#1F222A]">
      <div className="w-1 h-full absolute left-0 top-0 bg-[#8BC255] rounded-tl-[10px] rounded-bl-[10px]"></div>

      <div className="w-full h-full p-3 break_600:p-4 flex flex-col gap-2 break_600:gap-3">
        <TaskTop
          taskTitle={taskTitle}
          completed={completed}
          deleted={deleted}
        />

        <TaskTags tags={tags} />

        <TaskBottom
          numberOfPomodoros={numberOfPomodoros}
          projectName={projectName}
          completed={completed}
          deleted={deleted}
        />
      </div>
    </div>
  );
};

export interface TaskItemProps {
  taskTitle: string;
  projectName: string;
  numberOfPomodoros: number;
  tags: { name: string; color: string }[];
  completed?: boolean;
  deleted?: boolean;
}

export default TaskItem;
