import React from "react";
import { StrictModeItem } from "@/types";

const ToggleRow = React.memo(({ item, onUpdateState }: ToggleRowProps) => {
  return (
    <div className="flex justify-between gap-3 items-center">
      <h5 className="header-5 font-semibold">{item.title}</h5>

      <button
        className={`h-6 w-11 bg-[#E0E0E0] dark:bg-[#35383F] rounded-full togle-row-transition relative toggle-btn ${
          item.turnedOn ? "toggled" : ""
        }`}
        onClick={() => onUpdateState(item.id)}
        aria-pressed={item.turnedOn}
        aria-label={`Toggle ${item.title}`}
      >
        <div className="w-5 h-5 rounded-full bg-white absolute left-0.5 thumb"></div>
      </button>
    </div>
  );
});

ToggleRow.displayName = "ToggleRow";

interface ToggleRowProps {
  item: StrictModeItem;
  onUpdateState: (id: string) => void;
}

export default ToggleRow;
