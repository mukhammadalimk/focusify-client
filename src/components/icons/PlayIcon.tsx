import React from "react";
import Play from "@/assets/icons/play-icon.svg";

const PlayIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Play {...props} />
));

// display name for debugging
PlayIcon.displayName = "PlayIcon";

export default PlayIcon;
