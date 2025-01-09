"use client";
import { JSX, useState } from "react";
import TimeCircleWhite from "@/assets/icons/time-circle-white.svg";
import ManageWhite from "@/assets/icons/category-white.svg";
import CalendarWhite from "@/assets/icons/calendar-white.svg";
import ReportWhite from "@/assets/icons/report-white.svg";
import SettingsWhite from "@/assets/icons/settings-white.svg";
import TimeCircleRed from "@/assets/icons/time-circle-red.svg";
import ManageRed from "@/assets/icons/category-red.svg";
import CalendarRed from "@/assets/icons/calendar-red.svg";
import ReportRed from "@/assets/icons/report-red.svg";
import SettingsRed from "@/assets/icons/settings-red.svg";

const Footer = () => {
  const [active, setActive] = useState<FooterItemTitle>("Pomodoro");

  return (
    <div className="bg-white dark:bg-[#181A20] w-full h-[70px] border-t border-[#F5F5F5] dark:border-[#35383F] flex items-center z-10 absolute bottom-0">
      <div className="w-full flex justify-evenly items-center">
        {footerItems.map((item) => (
          <div
            className="flex flex-col gap-[2px] cursor-pointer transition-all transform active:scale-[0.97] will-change-transform w-[55px] break_400:w-[70px]  text-center"
            key={item.title}
            onClick={() => setActive(item.title)}
          >
            {item.getIcon(item.title === active)}
            <span
              className={`font-medium leading-[1.6] tracking-[0.2px] text-[10px] break_500:text-[15px] text-[#9E9E9E]${
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
        return <TimeCircleRed className="mx-auto w-6 h-6" />;
      } else {
        return <TimeCircleWhite className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Manage",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <ManageRed className="mx-auto w-6 h-6" />;
      } else {
        return <ManageWhite className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Calendar",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <CalendarRed className="mx-auto w-6 h-6" />;
      } else {
        return <CalendarWhite className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Report",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <ReportRed className="mx-auto w-6 h-6" />;
      } else {
        return <ReportWhite className="mx-auto w-6 h-6" />;
      }
    },
  },
  {
    title: "Settings",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <SettingsRed className="mx-auto w-6 h-6" />;
      } else {
        return <SettingsWhite className="mx-auto w-6 h-6" />;
      }
    },
  },
];

export default Footer;
