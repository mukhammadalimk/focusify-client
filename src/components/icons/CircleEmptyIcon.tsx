import React from "react";
import CircleEmpty from "@/assets/icons/circle-empty-icon.svg";

const CircleEmptyIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <CircleEmpty {...props} />
));

CircleEmptyIcon.displayName = "CircleEmptyIcon";
export default CircleEmptyIcon;
