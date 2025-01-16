"use client";
import { JSX } from "react";
import CalendarRedIcon from "./icons/CalendarRedIcon";
import CalendarGrayShadeIcon from "./icons/CalendarGrayShadeIcon";
import PomodoroWhiteIcon from "./icons/PomodoroWhiteIcon";
import PomodoroRedIcon from "./icons/PomodorRedIcon";
import SettingsRedIcon from "./icons/SettingsRedIcon";
import SettingsWhiteIcon from "./icons/SettingsWhiteIcon";
import ManageWhiteIcon from "./icons/ManageWhiteIcon";
import ManageRedIcon from "./icons/ManageRedIcon";
import ReportRedIcon from "./icons/ReportRedIcon";
import ReportWhiteIcon from "./icons/ReportWhiteIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="bg-white dark:bg-[#181A20] w-full h-[60px] md:h-[70px] border-t border-[#EEEEEE] dark:border-[#35383F] flex items-center md:absolute fixed bottom-0 select-none z-[100]">
      <div className="w-full flex justify-evenly items-center">
        {footerItems.map((item) => (
          <Link
            href={item.link}
            className="flex flex-col gap-[2px] cursor-pointer transition-all transform active:scale-[0.98] will-change-transform w-[55px] break_400:w-[70px] text-center"
            key={item.title}
          >
            {item.getIcon(item.link === pathname)}
            <span
              className={`font-medium body-x-small break_500:text-[15px] text-[#9E9E9E]${
                item.link === pathname ? " text-[#FF6347]" : ""
              }`}
            >
              {item.title}
            </span>
          </Link>
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
  link: string;
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
    link: "/",
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
    link: "/manage",
  },
  {
    title: "Calendar",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <CalendarRedIcon className="mx-auto w-6 h-6" />;
      } else {
        return (
          <CalendarGrayShadeIcon className="mx-auto w-6 h-6 !text-[#fff]" />
        );
      }
    },
    link: "/calendar",
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
    link: "/report",
  },
  {
    title: "Settings",
    getIcon: (active: boolean): JSX.Element => {
      if (active) {
        return <SettingsRedIcon className="mx-auto w-6 h-6" />;
      } else {
        return <SettingsWhiteIcon className="mx-auto w-6 h-6 fill-[#9E9E9E]" />;
      }
    },
    link: "/settings",
  },
];

export default Footer;
