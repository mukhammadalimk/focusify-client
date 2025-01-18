"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-4 select-none", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        caption:
          "flex justify-center relative items-center border-b border-[#EEEEEE] dark:border-[#35383F] pb-3 mb-3",
        caption_label: "header-5 font-bold",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:bg-accent hover:opacity-100 dark:hover:bg-[#282c35] border-[#EEEEEE] dark:border-[#35383F]"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-[#212121] dark:text-white h-[45px] w-[45px] font-bold header-5 grid place-items-center",
        row: "flex w-full",
        cell: "h-[45px] w-[45px] text-center p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-full",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-[45px] w-[45px] p-0 font-semibold aria-selected:opacity-100  !text-[16px] !leading-[1.6] text-[#424242] dark:text-white rounded-full dark:hover:bg-[#282c35]"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "!bg-[#FF6347] rounded-full hover:bg-[#FF6347] focus:!bg-[#FF6347] !text-white hover:text-white focus:!text-white",
        day_today: "bg-accent dark:bg-[#282c35] text-[#424242]",
        day_outside: "day-outside text-[#BDBDBD] !opacity-100",
        day_disabled: "!text-[#BDBDBD] dark:!text-[#9E9E9E] !opacity-100",
        day_range_middle:
          "aria-selected:bg-[#FF6347] aria-selected:text-[#424242]",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("!h-5 !w-5", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("!h-5 !w-5", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
