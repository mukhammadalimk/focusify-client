import React, { useState } from "react";
import PanelWrapper from "../panel/PanelWrapper";
import SunIcon from "../icons/SunIcon";
import FlagIcon from "../icons/FlagIcon";
import { SuitcaseIcon, TagIcon } from "../icons";
import PrimaryButton from "../buttons/PrimaryButton";
import DueDatePanel from "./DueDatePanel";

const AddTaskPanel = ({ isPanelOpen, onClose }: AddTaskPanelProps) => {
  const [estimatedPomodoros, setEstimatedPomodoros] = useState<number | null>(
    null
  );

  const [dueDatePanel, setDueDatePanel] = useState(false);

  return (
    <>
      <DueDatePanel
        isPanelOpen={dueDatePanel}
        onClose={() => setDueDatePanel(false)}
      />

      <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
        <input
          type="text"
          aria-label="Add a Task"
          placeholder="Add a Task"
          className={`placeholder-[#9E9E9E] dark:placeholder-[#BDBDBD] placeholder:font-medium leadind-[1.6] tracking-[0.2px] h-[38px] header-4 font-medium outline-none input-autofill w-full mt-4 bg-transparent caret-[#FF6347]`}
        />

        <div className="mt-6 py-6 border-y border-[#EEEEEE] dark:border-[#35383F] w-full">
          <span className="body-large-1-6 font-medium">
            Estimated Pomodoros
          </span>

          <div className="flex gap-3 w-full overflow-x-auto mt-3 no-scrollbar cursor-pointer select-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full grid place-items-center flex-shrink-0"
                style={{
                  backgroundColor:
                    estimatedPomodoros === i + 1 ? "#FF6347" : "",
                  color: estimatedPomodoros === i + 1 ? "white" : "",
                }}
                onClick={() => setEstimatedPomodoros(i + 1)}
              >
                <h5 className="header-5 font-semibold">{i + 1}</h5>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 flex justify-between items-center">
          <div className="flex gap-8">
            <SunIcon className="w-[28px] h-[28px]" />
            <FlagIcon className="w-[28px] h-[28px]" />
            <TagIcon className="w-[28px] h-[28px]" />
            <SuitcaseIcon className="w-[28px] h-[28px]" />
          </div>

          <PrimaryButton
            text="Add"
            className="bg-[#CC4F39] h-[43px] w-[120px] !text-[16px] text-white"
            onClick={() => {
              onClose();
              setDueDatePanel(true);
            }}
          />
        </div>
      </PanelWrapper>
    </>
  );
};

interface AddTaskPanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default AddTaskPanel;
