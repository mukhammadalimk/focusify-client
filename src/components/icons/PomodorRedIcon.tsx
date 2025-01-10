import React from "react";
import PomodoroRed from "@/assets/icons/pomodoro-red.svg";

const PomodoroRedIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <PomodoroRed {...props} />
));

PomodoroRedIcon.displayName = "PomodoroRedIcon";
export default PomodoroRedIcon;
