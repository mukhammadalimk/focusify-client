import LogoSmallWhite from "@/assets/icons/logo-white-small.svg";
import Notification from "@/assets/icons/notification.svg";
import SelectTask from "@/components/select-task/SelectTask";
import CircleTimer from "@/components/pomodoro/CircleTimer";

const HomePage = () => {
  return (
    <div className="bg-[#FF6347] flex-1 h-full px-3 md:px-4 pt-3 flex flex-col">
      <div className="flex justify-between items-center ">
        <LogoSmallWhite />
        <h4 className="font-bold text-[24px] md:text-[28px] leading-[1.6] text-white">
          Focusify
        </h4>

        <Notification />
      </div>

      <div className="mt-6 flex flex-col flex-1 pb-[94px]">
        <SelectTask />

        <CircleTimer />
      </div>
    </div>
  );
};

export default HomePage;
