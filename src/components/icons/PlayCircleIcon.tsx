import React from "react";
import PlayCircle from "@/assets/icons/play-icon.svg";

const PlayCircleIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <PlayCircle {...props} />
));

PlayCircleIcon.displayName = "PlayCircleIcon";
export default PlayCircleIcon;
