import React from "react";
import PomodoroWhite from "@/assets/icons/pomodoro-white.svg";

const PomodoroWhiteIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <PomodoroWhite {...props} />
));

PomodoroWhiteIcon.displayName = "PomodoroWhiteIcon";
export default PomodoroWhiteIcon;
