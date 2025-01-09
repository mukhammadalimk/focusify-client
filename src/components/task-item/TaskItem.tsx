import TaskTags from "./TaskTags";
import TaskTop from "./TaskTop";
import TaskBottom from "./TaskBottom";

const TaskItem = ({
  taskTitle,
  projectName,
  numberOfPomodoros,
  tags,
}: TaskItemProps) => {
  return (
    <div className="w-full h-max rounded-lg border border-[#EEEEEE] dark:border-[#35383F] relative overflow-hidden">
      <div className="w-1 h-full absolute left-0 top-0 bg-[#8BC255] rounded-tl-[10px] rounded-bl-[10px]"></div>

      <div className="w-full h-full p-3 break_600:p-4 flex flex-col gap-2 break_600:gap-3">
        <TaskTop taskTitle={taskTitle} />

        <TaskTags tags={tags} />

        <TaskBottom
          numberOfPomodoros={numberOfPomodoros}
          projectName={projectName}
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
}

export default TaskItem;
