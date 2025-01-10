import React from "react";
import Flag from "@/assets/icons/flag-icon.svg";

const FlagIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Flag {...props} />
));

FlagIcon.displayName = "FlagIcon";
export default FlagIcon;
