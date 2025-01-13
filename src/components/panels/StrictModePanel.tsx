"use client";
import { strictModes } from "@/data";
import { StrictModeItem } from "@/types";
import PanelButtons from "./PanelButtons";
import ToggleRow from "../shared/ToggleRow";
import PanelHeader from "../panel/PanelHeader";
import PanelWrapper from "../panel/PanelWrapper";
import { useState, useCallback, useMemo } from "react";

const StrictModePanel = ({ isPanelOpen, onClose }: StrictModePanelProps) => {
  const [modeItems, setModeItems] = useState<StrictModeItem[]>(
    () => strictModes
  );

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
    setModeItems(strictModes); // Reset to initial state
    onClose();
  };

  const onSave = () => {
    // Handle save logic (e.g., API call)
    onClose();
  };

  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
      <PanelHeader title="Strict Mode" />

      <div className="flex gap-7 flex-col py-5">{renderedToggleRows}</div>

      <PanelButtons onCancel={onCancel} onSave={onSave} />
    </PanelWrapper>
  );
};

interface StrictModePanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default StrictModePanel;
