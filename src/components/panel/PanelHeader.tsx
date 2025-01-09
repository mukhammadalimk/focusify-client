import PlusIcon from "@/assets/icons/plus-icon.svg";
import Divider from "../Divider";

const PanelHeader = ({ title, withIcon }: PanelHeaderProps) => {
  return (
    <div className="select-none">
      <div className="bg-[#EEEEEE] dark:bg-[#35383F] h-[7px] break_600:h-[8px] w-20 break_600:w-24 rounded-lg mx-auto cursor-pointer"></div>

      <div className="w-full text-center">
        <div className="w-full h-full relative py-5">
          <h4 className="text-[#212121] dark:text-[#FFFFFF] font-bold text-[20px] break_400:text-2xl leading-[1.6]">
            {title}
          </h4>

          {withIcon && (
            <PlusIcon className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer transition-all transform active:scale-[0.97] will-change-transform " />
          )}
        </div>

        <Divider />
      </div>
    </div>
  );
};

interface PanelHeaderProps {
  title: string;
  withIcon?: boolean;
}

export default PanelHeader;
