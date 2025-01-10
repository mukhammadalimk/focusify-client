import React from "react";
import HourGlass from "@/assets/icons/hourglass-icon.svg";

const HourGlassIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <HourGlass {...props} />
));

HourGlassIcon.displayName = "HourGlassIcon";
export default HourGlassIcon;
