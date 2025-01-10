import EyeOff from "@/assets/icons/eye-off.svg";
import React from "react";

const EyeOffIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <EyeOff {...props} />
));

EyeOffIcon.displayName = "EyeOffIcon";
export default EyeOffIcon;
