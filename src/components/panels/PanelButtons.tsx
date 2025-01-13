import PrimaryButton from "../buttons/PrimaryButton";

const PanelButtons = ({ onCancel, onSave }: PanelButtonsProps) => {
  return (
    <div className="w-full flex justify-around border-t border-[#F5F5F5] dark:border-[#35383F] p-3 gap-2 break_400:p-5 break_400:gap-3 break_500:p-6 break_500:gap-4">
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
  );
};

interface PanelButtonsProps {
  onCancel: () => void;
  onSave: () => void;
}

export default PanelButtons;
