import React from "react";
import Eye from "@/assets/icons/eye.svg";

const EyeIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Eye {...props} />
));

EyeIcon.displayName = "EyeIcon";
export default EyeIcon;
