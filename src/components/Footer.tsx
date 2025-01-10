"use client";
import { JSX, useState } from "react";
import CalendarRedIcon from "./icons/CalendarRedIcon";
import CalendarWhiteIcon from "./icons/CalendarWhiteIcon";
import PomodoroWhiteIcon from "./icons/PomodoroWhiteIcon";
import PomodoroRedIcon from "./icons/PomodorRedIcon";
import SettingsRedIcon from "./icons/SettingsRedIcon";
import SettingsWhiteIcon from "./icons/SettingsWhiteIcon";
import ManageWhiteIcon from "./icons/ManageWhiteIcon";
import ManageRedIcon from "./icons/ManageRedIcon";
import ReportRedIcon from "./icons/ReportRedIcon";
import ReportWhiteIcon from "./icons/ReportWhiteIcon";

const Footer = () => {
  const [active, setActive] = useState<FooterItemTitle>("Pomodoro");

  return (
    <div className="bg-white dark:bg-[#181A20] w-full h-[70px] border-t border-[#F5F5F5] dark:border-[#35383F] flex items-center z-10 absolute bottom-0">
      <div className="w-full flex justify-evenly items-center">
        {footerItems.map((item) => (
          <div
            className="flex flex-col gap-[2px] cursor-pointer transition-all transform active:scale-[0.98] will-change-transform w-[55px] break_400:w-[70px] text-center"
            key={item.title}
            onClick={() => setActive(item.title)}
          >
            {item.getIcon(item.title === active)}
            <span
              className={`font-medium body-x-small break_500:text-[15px] text-[#9E9E9E]${
                item.title === active ? " text-[#FF6347]" : ""
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

type FooterItemTitle =
  | "Pomodoro"
  | "Manage"
  | "Calendar"
  | "Report"
  | "Settings";

interface FooterItem {
  title: FooterItemTitle;
  getIcon: (active: boolean) => JSX.Element;
}

const footerItems: FooterItem[] = [
  {
    title: "Pomodoro",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <PomodoroRedIcon className="mx-auto w-6 h-6" />;
      } else {
        return <PomodoroWhiteIcon className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Manage",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <ManageRedIcon className="mx-auto w-6 h-6" />;
      } else {
        return <ManageWhiteIcon className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Calendar",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <CalendarRedIcon className="mx-auto w-6 h-6" />;
      } else {
        return <CalendarWhiteIcon className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Report",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <ReportRedIcon className="mx-auto w-6 h-6" />;
      } else {
        return <ReportWhiteIcon className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Settings",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <SettingsRedIcon className="mx-auto w-6 h-6" />;
      } else {
        return <SettingsWhiteIcon className="mx-auto w-6 h-6" />;
      }
    },
  },
];

export default Footer;
