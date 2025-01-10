import React from "react";
import CircleCheckmark from "@/assets/icons/circle-checkmark.svg";

const CircleCheckmarkIcon = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => <CircleCheckmark {...props} />
);

CircleCheckmarkIcon.displayName = "CircleCheckmarkIcon";
export default CircleCheckmarkIcon;
