import React from "react";
import Facebook from "@/assets/icons/facebook.svg";

const FacebookIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Facebook {...props} />
));

FacebookIcon.displayName = "FacebookIcon";
export default FacebookIcon;
