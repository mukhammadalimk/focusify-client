import React from "react";
import Lock from "@/assets/icons/lock.svg";

const LockIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Lock {...props} />
));

LockIcon.displayName = "LockIcon";
export default LockIcon;
