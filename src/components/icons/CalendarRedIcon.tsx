import React from "react";
import CalendarRed from "@/assets/icons/calendar-red.svg";

const CalendarRedIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <CalendarRed {...props} />
));

CalendarRedIcon.displayName = "CalendarRedIcon";
export default CalendarRedIcon;
