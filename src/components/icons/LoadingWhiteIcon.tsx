import LoadingWhite from "@/assets/icons/loading-white.svg";
import React from "react";

const LoadingWhiteIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <LoadingWhite {...props} />
));

LoadingWhiteIcon.displayName = "LoadingWhiteIcon";
export default LoadingWhiteIcon;
