import CancelIcon from "../icons/CancelIcon";
import CircleCheckmarkIcon from "../icons/CircleCheckmarkIcon";

const TaskSelected = ({ taskTitle }: { taskTitle: string }) => {
  return (
    <>
      <div className="w-1 h-full absolute left-0 top-0 bg-[#8BC255] rounded-tl-[10px] rounded-bl-[10px]"></div>

      <div className="grid items-center justify-between w-full grid-cols-[min-content_1fr_min-content] gap-4">
        <CircleCheckmarkIcon className="w-5 h-5 break_400:w-6 break_400:h-6" />

        <div className="relative overflow-hidden">
          <span className="font-semibold body-x-large whitespace-nowrap">
            {taskTitle}
          </span>
        </div>

        <CancelIcon className="fill-[#212121] dark:fill-white" />
      </div>
    </>
  );
};

export default TaskSelected;
