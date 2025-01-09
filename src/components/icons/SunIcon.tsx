import React from "react";
import Sun from "@/assets/icons/sun-icon.svg";

const SunIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Sun {...props} />
));

// display name for debugging
SunIcon.displayName = "SunIcon";

export default SunIcon;
