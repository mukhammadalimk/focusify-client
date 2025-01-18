"use client";

import PanelWrapper from "../panel/PanelWrapper";
import PanelHeader from "../panel/PanelHeader";
import SunIcon from "../icons/SunIcon";
import { Calendar2Icon, PlannedIcon, SettingSunIcon } from "../icons";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { isBefore, startOfDay } from "date-fns";
import PrimaryButton from "../buttons/PrimaryButton";
import PriorityPanel from "./PriorityPanel";

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
  const [priorityPanel, setPriorityPanel] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const disableOldDates = (date: Date) => {
    const today = startOfDay(new Date()); // Get the start of the current day
    return isBefore(date, today); // Return true for dates before today
  };

  return (
    <>
      <PriorityPanel
        isPanelOpen={priorityPanel}
        onClose={() => setPriorityPanel(false)}
      />

      <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
        <PanelHeader title="Due Date" />

        <div className="">
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
                <span className="body-medium-1-6 font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-[12px] border border-[#EEEEEE] dark:border-[#35383F] dark:bg-[#1F222A] w-max mx-auto "
              disabled={disableOldDates}
            />
          </div>

          <div className="w-full flex justify-around gap-4 border-t border-[#F5F5F5] dark:border-[#35383F] p-6 mt-5">
            <PrimaryButton
              text="Cancel"
              className="bg-[#FFF3F0] dark:bg-[#35383F] text-[#FF6347] dark:text-white"
              onClick={onClose}
            />

            <PrimaryButton
              text="Next"
              className="bg-[#FF6347] text-white"
              onClick={() => {
                onClose();
                setPriorityPanel(true);
              }}
            />
          </div>
        </div>
      </PanelWrapper>
    </>
  );
};

interface DueDatePanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default DueDatePanel;
