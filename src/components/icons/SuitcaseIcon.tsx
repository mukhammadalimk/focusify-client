import React from "react";
import Suitcase from "@/assets/icons/suitcase-icon.svg";

const SuitcaseIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Suitcase {...props} />
));

// display name for debugging
SuitcaseIcon.displayName = "SuitcaseIcon";

export default SuitcaseIcon;
