import { tasks } from "@/data";
import Divider from "../Divider";
import Input, { IconName } from "../Input";
import TaskItem from "../task-item/TaskItem";
import PanelHeader from "../panel/PanelHeader";
import PanelWrapper from "../panel/PanelWrapper";

const TasksPanel = ({ isPanelOpen, onClose }: TasksPanelProps) => {
  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
      <PanelHeader title="Select Task" withIcon />

      <div className="mt-5 mb-4 break_500:my-5">
        <Input
          type="text"
          placeholder="Search task..."
          id="select-task"
          iconName={IconName.Search}
          containerStyle="max-w-none w-full"
        />
      </div>

      <div className="flex gap-4 items-center">
        <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
          Today Tasks
        </span>
        <Divider />
      </div>

      <div className="grid mt-3 break_500:mt-5 pb-3 break_500:pb-5 gap-3 break_500:gap-5 overflow-y-scroll no-scrollbar items-start">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </PanelWrapper>
  );
};

interface TasksPanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default TasksPanel;
