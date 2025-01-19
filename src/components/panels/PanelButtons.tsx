import { twMerge } from "tailwind-merge";
import PrimaryButton from "../buttons/PrimaryButton";

const PanelButtons = ({
  onCancel,
  onSave,
  style,
  texts,
}: PanelButtonsProps) => {
  return (
    <div
      className={twMerge(
        "w-full flex justify-around border-t border-[#F5F5F5] dark:border-[#35383F] p-3 gap-2 break_400:p-5 break_400:gap-3 break_500:p-6 break_500:gap-4 bg-white dark:bg-[#181A20]",
        style
      )}
    >
      <PrimaryButton
        text={texts[0]}
        className="bg-[#FFF3F0] dark:bg-[#35383F] text-[#FF6347] dark:text-white h-[45px] break_400:h-[50px] break_500:h-[58px]"
        onClick={onCancel}
      />
      <PrimaryButton
        text={texts[1]}
        className="bg-[#FF6347] text-white h-[45px] break_400:h-[50px] break_500:h-[58px]"
        onClick={onSave}
      />
    </div>
  );
};

interface PanelButtonsProps {
  onCancel: () => void;
  onSave: () => void;
  texts: string[];
  style?: string;
}

export default PanelButtons;
