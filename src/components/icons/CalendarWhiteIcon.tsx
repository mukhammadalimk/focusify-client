import React from "react";
import CalendarWhite from "@/assets/icons/calendar-white.svg";

const CalendarWhiteIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <CalendarWhite {...props} />
));

CalendarWhiteIcon.displayName = "CalendarWhiteIcon";
export default CalendarWhiteIcon;
