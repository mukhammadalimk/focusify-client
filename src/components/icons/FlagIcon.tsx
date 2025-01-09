import Flag from "@/assets/icons/flag-icon.svg";
import React from "react";

const FlagIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Flag {...props} />
));

// display name for debugging
FlagIcon.displayName = "FlagIcon";

export default FlagIcon;
