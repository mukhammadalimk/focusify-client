import React from "react";
import PlayVector from "@/assets/icons/play.svg";

const PlayVectorIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <PlayVector {...props} />
));

PlayVectorIcon.displayName = "PlayVectorIcon";
export default PlayVectorIcon;
