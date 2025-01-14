import React from "react";
import ArrowRightVector from "@/assets/icons/arrow-right-vector.svg";

const ArrowRightVectorIcon = React.memo(
  (props: React.SVGProps<SVGSVGElement>) => <ArrowRightVector {...props} />
);

ArrowRightVectorIcon.displayName = "ArrowDownIcon";
export default ArrowRightVectorIcon;
