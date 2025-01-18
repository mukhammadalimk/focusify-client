import MusicIcon from "@/components/icons/MusicIcon";
import HourGlassIcon from "@/components/icons/HourGlassIcon";
import DangerCircleIcon from "@/components/icons/DangerCircleIcon";
import { useState } from "react";
import StrictModePanel from "@/components/panels/StrictModePanel";
import TimerModePanel from "@/components/panels/TimerModePanel";
import WhiteNoisePanel from "@/components/panels/WhiteNoisePanel";
import { ModeMenu } from "@/types";

const menuItems = [
  {
    id: ModeMenu.StrictMode,
    name: "Strict Mode",
    icon: <DangerCircleIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
  {
    id: ModeMenu.TimerMode,
    name: "Timer Mode",
    icon: <HourGlassIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
  {
    id: ModeMenu.WhiteNoise,
    name: "White Noise",
    icon: <MusicIcon className="fill-[#616161] dark:fill-[#EEEEEE]" />,
  },
];

const menusInitialState = {
  strictMode: false,
  timerMode: false,
  whiteNoise: false,
};

interface MenuInitialState {
  strictMode: boolean;
  timerMode: boolean;
  whiteNoise: boolean;
}

const PomodoroActionMenu = () => {
  const [menusState, setMenusState] =
    useState<MenuInitialState>(menusInitialState);

  const onToggleMenuItem = (val: ModeMenu) => {
    // if (val === ModeMenu.WhiteNoise) {
    //   const ipadWrapper = document.getElementById("ipad-pro") as HTMLDivElement;
    //   setHeight((ipadWrapper.clientHeight / 100) * 78);
    // }

    setMenusState((prev) => ({ ...prev, [val]: !prev[val] }));
  };

  return (
    <>
      {menusState.strictMode && (
        <StrictModePanel
          isPanelOpen={menusState.strictMode}
          onClose={() => onToggleMenuItem(ModeMenu.StrictMode)}
        />
      )}

      {menusState.timerMode && (
        <TimerModePanel
          isPanelOpen={menusState.timerMode}
          onClose={() => onToggleMenuItem(ModeMenu.TimerMode)}
        />
      )}

      {menusState.whiteNoise && (
        <WhiteNoisePanel
          isPanelOpen={menusState.whiteNoise}
          onClose={() => onToggleMenuItem(ModeMenu.WhiteNoise)}
        />
      )}

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
