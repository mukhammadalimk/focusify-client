import React from "react";
import CalendarGrayShade from "@/assets/icons/calendar-gray-shade.svg";

const CalendarGrayShadeIcon = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => <CalendarGrayShade {...props} />
);

CalendarGrayShadeIcon.displayName = "CalendarGrayShadeIcon";
export default CalendarGrayShadeIcon;
