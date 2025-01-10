import React from "react";
import Play from "@/assets/icons/play.svg";

const PlayIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Play {...props} />
));

PlayIcon.displayName = "PlayIcon";
export default PlayIcon;
