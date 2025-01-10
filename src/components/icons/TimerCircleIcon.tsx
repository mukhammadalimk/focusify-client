import React from "react";
import TimerCircle from "@/assets/icons/timer-circle.svg";

const TimerCircleIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <TimerCircle {...props} />
));

TimerCircleIcon.displayName = "TimerCircleIcon";
export default TimerCircleIcon;
