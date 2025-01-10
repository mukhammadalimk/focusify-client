import MusicIcon from "@/components/icons/MusicIcon";
import HourGlassIcon from "@/components/icons/HourGlassIcon";
import DangerCircleIcon from "@/components/icons/DangerCircleIcon";

const menuItems = [
  {
    name: "Strict Mode",
    icon: <DangerCircleIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
  {
    name: "Timer Mode",
    icon: <HourGlassIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
  {
    name: "White Noise",
    icon: <MusicIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
];

const PomodoroActionMenu = () => {
  return (
    <div className="flex z-10 justify-evenly w-full select-none">
      {menuItems.map((menu) => (
        <div
          key={menu.name}
          className="flex flex-col w-[90px] items-center gap-2 cursor-pointer transition-all transform active:scale-[0.98] will-change-transform"
        >
          {menu.icon}
          <span className="text-[#616161] dark:text-[#EEEEEE] font-medium body-small break_400:text-[15px]">
            {menu.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PomodoroActionMenu;
