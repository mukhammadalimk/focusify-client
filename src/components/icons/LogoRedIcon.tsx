import LogoRed from "@/assets/icons/logo-red.svg";
import React from "react";

const LogoRedIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <LogoRed {...props} />
));

LogoRedIcon.displayName = "LogoRedIcon";
export default LogoRedIcon;
