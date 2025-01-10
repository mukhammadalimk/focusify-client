import ArrowLeft from "@/assets/icons/arrow-left.svg";
import React from "react";

const ArrowLeftIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <ArrowLeft {...props} />
));

ArrowLeftIcon.displayName = "ArrowLeftIcon";
export default ArrowLeftIcon;
