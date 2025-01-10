import React from "react";
import Cancel from "@/assets/icons/cancel-icon.svg";

const CancelIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Cancel {...props} />
));

CancelIcon.displayName = "CancelIcon";
export default CancelIcon;
