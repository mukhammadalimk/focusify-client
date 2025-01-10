import React from "react";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const ArrowDownIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <ArrowDown {...props} />
));

ArrowDownIcon.displayName = "ArrowDownIcon";
export default ArrowDownIcon;
