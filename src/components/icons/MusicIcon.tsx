import React from "react";
import Music from "@/assets/icons/music-icon.svg";

const MusicIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Music {...props} />
));

MusicIcon.displayName = "MusicIcon";
export default MusicIcon;
