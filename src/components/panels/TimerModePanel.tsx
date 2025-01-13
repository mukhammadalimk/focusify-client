import PanelButtons from "./PanelButtons";
import CheckIcon from "../icons/CheckIcon";
import { getSavedTimerMode } from "@/utils";
import PanelHeader from "../panel/PanelHeader";
import InfinityIcon from "../icons/InfinityIcon";
import PanelWrapper from "../panel/PanelWrapper";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { LOCAL_STORAGE_KEYS, TimerMode } from "@/types";
import React, { useCallback, useEffect, useState } from "react";

// Array of timer modes to iterate over
const timerModes = [
  {
    mode: TimerMode.Countdown,
    labels: ["25:00", "00:00"],
    description: "Countdown from 25 minutes until time runs out.",
  },
  {
    mode: TimerMode.Infinity,
    labels: ["00:00", <InfinityIcon key="infinity" />],
    description: "Start counting from 0 until stopped manually.",
  },
];

const TimerModePanel = ({ isPanelOpen, onClose }: TimerModePanelProps) => {
  const [timerMode, setTimerMode] = useState(TimerMode.Countdown);

  useEffect(() => {
    if (isPanelOpen) setTimerMode(getSavedTimerMode());
  }, [isPanelOpen]);

  const onSave = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.TIMER_MODE, timerMode);
    onClose();
  }, [onClose, timerMode]);

  const onSelectTimerMode = useCallback((mode: TimerMode) => {
    setTimerMode(mode);
  }, []);

  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
      <PanelHeader title="Timer Mode" />

      <div className="flex gap-7 flex-col py-5" role="radiogroup">
        {timerModes.map(({ mode, labels, description }) => (
          <div
            key={mode}
            className="flex justify-between items-center gap-3 cursor-pointer"
            onClick={() => onSelectTimerMode(mode)}
            role="radio"
            aria-checked={timerMode === mode}
          >
            <div>
              <div className="flex items-center gap-1 font-semibold">
                <h4 className="header-4">{labels[0]}</h4>
                <ArrowRightIcon />
                {typeof labels[1] === "string" ? (
                  <h4 className="header-4">{labels[1]}</h4>
                ) : (
                  labels[1]
                )}
              </div>
              <span className="body-small text-[13px] break_500:text-[16px] text-[#616161] dark:text-[#EEEEEE] font-regular">
                {description}
              </span>
            </div>
            {timerMode === mode && <CheckIcon />}
          </div>
        ))}
      </div>

      <PanelButtons onCancel={onClose} onSave={onSave} />
    </PanelWrapper>
  );
};

interface TimerModePanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default React.memo(TimerModePanel);
