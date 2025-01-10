import React from "react";
import Apple from "@/assets/icons/apple.svg";

const AppleIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Apple {...props} />
));

// display name for debugging
AppleIcon.displayName = "AppleIcon";
export default AppleIcon;
