import MusicIcon from "@/components/icons/MusicIcon";
import HourGlassIcon from "@/components/icons/HourGlassIcon";
import DangerCircleIcon from "@/components/icons/DangerCircleIcon";
import { useState } from "react";
import StrictModePanel from "@/components/panels/StrictModePanel";

enum Menus {
  StrictMode = "strictMode",
  TimerMode = "timerMode",
  whiteNoiseMode = "whiteNoiseMode",
}

const menuItems = [
  {
    id: Menus.StrictMode,
    name: "Strict Mode",
    icon: <DangerCircleIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
  {
    id: Menus.TimerMode,
    name: "Timer Mode",
    icon: <HourGlassIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
  {
    id: Menus.whiteNoiseMode,
    name: "White Noise",
    icon: <MusicIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
];

const menusInitialState = {
  strictMode: false,
  timerMode: false,
  whiteNoiseMode: false,
};

interface MenuInitialState {
  strictMode: boolean;
  timerMode: boolean;
  whiteNoiseMode: boolean;
}

const PomodoroActionMenu = () => {
  const [menusState, setMenusState] =
    useState<MenuInitialState>(menusInitialState);

  const onToggleMenuItem = (val: Menus) => {
    setMenusState((prev) => ({ ...prev, [val]: !prev[val] }));
  };

  return (
    <>
      <StrictModePanel
        isPanelOpen={menusState.strictMode}
        onClose={() => onToggleMenuItem(Menus.StrictMode)}
      />

      <div className="flex z-10 justify-evenly w-full select-none">
        {menuItems.map((menu) => (
          <div
            key={menu.name}
            className="flex flex-col w-[90px] items-center gap-2 cursor-pointer transition-all transform active:scale-[0.98] will-change-transform"
            onClick={() => onToggleMenuItem(menu.id)}
          >
            {menu.icon}
            <span className="text-[#616161] dark:text-[#EEEEEE] font-medium body-small break_400:text-[15px]">
              {menu.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PomodoroActionMenu;
