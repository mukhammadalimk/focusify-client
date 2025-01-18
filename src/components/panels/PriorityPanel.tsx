import PanelWrapper from "../panel/PanelWrapper";
import PanelHeader from "../panel/PanelHeader";
import PrimaryButton from "../buttons/PrimaryButton";
import { FlagIcon } from "lucide-react";
import { useState } from "react";
import { CheckIcon } from "../icons";
import { Priority } from "@/types";
import { priorities } from "@/data";
import TagsPanel from "./TagsPanel";

const PriorityPanel = ({ isPanelOpen, onClose }: PriorityPanelProps) => {
  const [priority, setPriority] = useState<Priority>(Priority.High);
  const [tagsPanelOpen, setTagsPanelOpen] = useState(false);

  return (
    <>
      <TagsPanel
        isPanelOpen={tagsPanelOpen}
        onClose={() => setTagsPanelOpen(false)}
      />
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
              {priority === item.value && <CheckIcon className="w-7 h-7" />}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-around gap-4 border-t border-[#F5F5F5] dark:border-[#35383F] p-6">
          <PrimaryButton
            text="Cancel"
            className="bg-[#FFF3F0] dark:bg-[#35383F] text-[#FF6347] dark:text-white"
            onClick={onClose}
          />

          <PrimaryButton
            text="Next"
            className="bg-[#FF6347] text-white"
            onClick={() => {
              onClose();
              setTagsPanelOpen(true);
            }}
          />
        </div>
      </PanelWrapper>
    </>
  );
};

interface PriorityPanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default PriorityPanel;
