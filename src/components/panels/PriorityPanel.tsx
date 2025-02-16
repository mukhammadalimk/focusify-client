import PanelWrapper from "../panel/PanelWrapper";
import PanelHeader from "../panel/PanelHeader";
import { useState } from "react";
import { CheckIcon, FlagIcon } from "../icons";
import { Priority } from "@/types";
import { priorities } from "@/data";
import PanelButtons from "./PanelButtons";

const PriorityPanel = ({ isPanelOpen, onClose }: PriorityPanelProps) => {
  const [priority, setPriority] = useState<Priority>(Priority.High);

  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
      <PanelHeader title="Priority" />

      <div>
        {priorities.map((item) => (
          <div
            className="grid items-center grid-cols-[max-content_1fr_max-content] gap-3 py-4 break_500:gap-4 break_500:py-5 cursor-pointer border-b border-[#EEEEEE] dark:border-[#35383F] last:border-b-0"
            key={item.id}
            onClick={() => setPriority(item.value)}
          >
            <div
              className="w-[52px] h-[52px] rounded-full grid place-items-center"
              style={{ backgroundColor: item.color }}
            >
              <FlagIcon className="fill-white text-white w-7 h-7" />
            </div>
            <h6 className="header-6 font-semibold">{item.label}</h6>
            {priority === item.value && (
              <CheckIcon className="w-7 h-7 text-[#FF6347]" />
            )}
          </div>
        ))}
      </div>

      <PanelButtons
        onCancel={onClose}
        onSave={onClose}
        texts={["Cancel", "OK"]}
      />
    </PanelWrapper>
  );
};

interface PriorityPanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default PriorityPanel;
