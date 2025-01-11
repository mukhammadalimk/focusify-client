import { tasks } from "@/data";
import Divider from "../Divider";
import Input, { IconName } from "../Input";
import TaskItem from "../task-item/TaskItem";
import PanelHeader from "../panel/PanelHeader";
import PanelWrapper from "../panel/PanelWrapper";

const TasksPanel = ({ isPanelOpen, onClose, height }: TasksPanelProps) => {
  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose} height={height}>
      <PanelHeader title="Select Task" withIcon />

      <Input
        type="text"
        text="Search task..."
        placeholder="Search task..."
        id="select-task"
        iconName={IconName.Search}
        withoutLabel
        inputStyle="text-[#BDBDBD] dark:text-[#757575] font-normal mt-5 mb-4 break_500:my-5"
        containerStyle="max-w-none w-full"
      />

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
  height: number;
}

export default TasksPanel;
