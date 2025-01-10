import React from "react";
import LogoSmallWhite from "@/assets/icons/logo-white-small.svg";

const LogoSmallWhiteIcon = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => <LogoSmallWhite {...props} />
);

LogoSmallWhiteIcon.displayName = "LogoSmallWhiteIcon";
export default LogoSmallWhiteIcon;
