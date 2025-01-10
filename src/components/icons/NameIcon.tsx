import React from "react";
import Name from "@/assets/icons/profile.svg";

const NameIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Name {...props} />
));

NameIcon.displayName = "NameIcon";
export default NameIcon;
