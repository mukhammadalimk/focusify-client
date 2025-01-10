import React from "react";
import Vector from "@/assets/icons/vector.svg";

const VectorIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Vector {...props} />
));

VectorIcon.displayName = "VectorIcon";
export default VectorIcon;
