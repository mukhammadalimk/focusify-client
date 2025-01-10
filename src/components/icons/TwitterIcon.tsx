import Twitter from "@/assets/icons/twitter.svg";
import React from "react";

const TwitterIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Twitter {...props} />
));

TwitterIcon.displayName = "TwitterIcon";
export default TwitterIcon;
