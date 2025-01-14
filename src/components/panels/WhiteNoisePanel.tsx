import { whiteNoises } from "@/data";
import PanelButtons from "./PanelButtons";
import CheckIcon from "../icons/CheckIcon";
import { getSavedWhiteNoise } from "@/utils";
import PanelHeader from "../panel/PanelHeader";
import PanelWrapper from "../panel/PanelWrapper";
import { LOCAL_STORAGE_KEYS, WhiteNoise } from "@/types";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const WhiteNoisePanel = ({
  isPanelOpen,
  onClose,
  height,
}: WhiteNoisePanelProps) => {
  const [whiteNoise, setWhiteNoise] = useState<WhiteNoise>(WhiteNoise.None);
  const memoizedWhiteNoises = useMemo(() => whiteNoises, []);

  useEffect(() => {
    if (isPanelOpen) setWhiteNoise(getSavedWhiteNoise());
  }, [isPanelOpen]);

  const onSave = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.WHITE_NOISE, whiteNoise);
    onClose();
  }, [onClose, whiteNoise]);

  const onSelectWhiteNoise = useCallback((mode: WhiteNoise) => {
    setWhiteNoise(mode);
  }, []);

  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose} height={height}>
      <PanelHeader title="White Noise" />

      <div
        className="flex flex-col overflow-x-scroll no-scrollbar"
        role="radiogroup"
        aria-labelledby="white-noise-label"
      >
        {memoizedWhiteNoises.map((noise) => (
          <div
            key={noise.id}
            role="radio"
            aria-checked={whiteNoise === noise.value}
            tabIndex={0}
            className="flex items-center justify-between border-b border-b-[#eeeeee] dark:border-b-[#35383F] py-5 last:border-b-0 cursor-pointer"
            onClick={() => onSelectWhiteNoise(noise.value)}
          >
            <h5 className="header-5 font-semibold">{noise.label}</h5>
            {whiteNoise === noise.value && <CheckIcon />}
          </div>
        ))}
      </div>

      <PanelButtons onCancel={onClose} onSave={onSave} />
    </PanelWrapper>
  );
};

interface WhiteNoisePanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
  height: number;
}

export default React.memo(WhiteNoisePanel);
