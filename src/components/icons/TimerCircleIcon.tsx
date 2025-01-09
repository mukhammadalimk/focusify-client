import React from "react";
import TimerCircle from "@/assets/icons/timer-icon.svg";

const TimerCircleIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <TimerCircle {...props} />
));

// display name for debugging
TimerCircleIcon.displayName = "TimerCircleIcon";

export default TimerCircleIcon;
