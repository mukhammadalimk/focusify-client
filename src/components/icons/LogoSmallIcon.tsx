import React from "react";
import LogoSmall from "@/assets/icons/logo-white-small.svg";

const LogoSmallIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <LogoSmall {...props} />
));

LogoSmallIcon.displayName = "LogoSmallIcon";
export default LogoSmallIcon;
