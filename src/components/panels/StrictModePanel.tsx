"use client";
import { useState, useCallback, useMemo } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import PanelHeader from "../panel/PanelHeader";
import PanelWrapper from "../panel/PanelWrapper";
import ToggleRow from "../shared/ToggleRow";

export interface ModeItem {
  id: string;
  title: string;
  turnedOn: boolean;
}

const items: ModeItem[] = [
  { id: "1", title: "Block All Notifications", turnedOn: false },
  { id: "2", title: "Block Phone Calls", turnedOn: true },
  { id: "3", title: "Block Other Apps", turnedOn: false },
  { id: "4", title: "Lock Phone", turnedOn: false },
  { id: "5", title: "Prohibit to Exit", turnedOn: false },
];

const StrictModePanel = ({ isPanelOpen, onClose }: StrictModePanelProps) => {
  const [modeItems, setModeItems] = useState<ModeItem[]>(() => items);

  // Memoize the toggle function to prevent unnecessary re-renders
  const onUpdateItems = useCallback((id: string) => {
    setModeItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, turnedOn: !item.turnedOn } : item
      )
    );
  }, []);

  // Memoize the rendered toggle rows
  const renderedToggleRows = useMemo(
    () =>
      modeItems.map((item) => (
        <ToggleRow key={item.id} item={item} onUpdateState={onUpdateItems} />
      )),
    [modeItems, onUpdateItems]
  );

  const onCancel = () => {
    setModeItems(items); // Reset to initial state
    onClose();
  };

  const onSave = () => {
    // Handle save logic (e.g., API call)
    onClose();
  };

  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
      <PanelHeader title="Strict Mode" withIcon />

      <div className="flex gap-7 flex-col py-5">{renderedToggleRows}</div>

      <div className="w-full flex justify-around gap-4 border-t border-[#F5F5F5] dark:border-[#35383F] p-6">
        <PrimaryButton
          text="Cancel"
          className="bg-[#FFF3F0] dark:bg-[#35383F] text-[#FF6347] dark:text-white"
          onClick={onCancel}
        />
        <PrimaryButton
          text="Save"
          className="bg-[#FF6347] text-white"
          onClick={onSave}
        />
      </div>
    </PanelWrapper>
  );
};

interface StrictModePanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default StrictModePanel;
