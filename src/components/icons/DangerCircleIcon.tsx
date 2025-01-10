import React from "react";
import DangerCircle from "@/assets/icons/danger-circle-icon.svg";

const DangerCircleIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <DangerCircle {...props} />
));

DangerCircleIcon.displayName = "DangerCircleIcon";
export default DangerCircleIcon;
