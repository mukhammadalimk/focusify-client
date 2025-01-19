"use client";

import PanelWrapper from "../panel/PanelWrapper";
import PanelHeader from "../panel/PanelHeader";
import SunIcon from "../icons/SunIcon";
import { Calendar2Icon, PlannedIcon, SettingSunIcon } from "../icons";
// import { Calendar } from "@/components/ui/calendar";
// import { useState } from "react";
// import { isBefore, startOfDay } from "date-fns";
import PanelButtons from "./PanelButtons";

const dueDates = [
  {
    id: 1,
    title: "Today",
    color: "#4AAF57",
    icon: <SunIcon className="text-white w-7 h-7" />,
  },
  {
    id: 2,
    title: "Tomorrow",
    color: "#1A96F0",
    icon: <SettingSunIcon className="text-white w-7 h-7" />,
  },
  {
    id: 3,
    title: "This Week",
    color: "#9D28AC",
    icon: <Calendar2Icon className="text-white w-7 h-7" />,
  },

  {
    id: 4,
    title: "Planned",
    color: "#F54336",
    icon: <PlannedIcon className="text-white w-7 h-7" />,
  },
];

const DueDatePanel = ({ isPanelOpen, onClose }: DueDatePanelProps) => {
  // const [date, setDate] = useState<Date | undefined>(new Date());

  // const disableOldDates = (date: Date) => {
  //   const today = startOfDay(new Date()); // Get the start of the current day
  //   return isBefore(date, today); // Return true for dates before today
  // };

  return (
    <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
      <PanelHeader title="Due Date" />

      <div className="overflow-y-auto no-scrollbar">
        <div className="flex justify-around pt-5 pb-6">
          {dueDates.map((item) => (
            <div
              className="flex flex-col gap-2 items-center w-[90px]"
              key={item.id}
            >
              <div
                className="w-[52px] h-[52px] rounded-full grid place-items-center"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <span className="body-medium-1-6 font-medium">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="mb-5 w-[349px] h-[361px] border rounded-[12px] mx-auto border-[#F5F5F5] dark:border-[#35383F]">
          {/* <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-[12px] border border-[#EEEEEE] dark:border-[#35383F] dark:bg-[#1F222A] w-max mx-auto "
            disabled={disableOldDates}
          /> */}
        </div>
      </div>

      <PanelButtons
        onCancel={onClose}
        onSave={onClose}
        texts={["Cancel", "OK"]}
      />
    </PanelWrapper>
  );
};

interface DueDatePanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default DueDatePanel;
