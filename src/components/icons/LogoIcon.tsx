import React from "react";
import Logo from "@/assets/icons/logo.svg";

const LogoIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Logo {...props} />
));

LogoIcon.displayName = "LogoIcon";
export default LogoIcon;
