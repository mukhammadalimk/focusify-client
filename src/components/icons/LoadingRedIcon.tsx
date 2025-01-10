import React from "react";
import LoadingRed from "@/assets/icons/loading-red.svg";

const LoadingRedIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <LoadingRed {...props} />
));

LoadingRedIcon.displayName = "LoadingRedIcon";
export default LoadingRedIcon;
