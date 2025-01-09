import LoadingRed from "@/assets/icons/loading-red.svg";
import React from "react";

const LoadingRedIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <LoadingRed {...props} />
));

// display name for debugging
LoadingRedIcon.displayName = "LoadingRedIcon";

export default LoadingRedIcon;
