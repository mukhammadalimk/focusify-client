import React from "react";
import Plus from "@/assets/icons/plus-icon.svg";

const PlusIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Plus {...props} />
));

PlusIcon.displayName = "PlusIcon";
export default PlusIcon;
