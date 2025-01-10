import React from "react";
import ManageWhite from "@/assets/icons/category-white.svg";

const ManageWhiteIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <ManageWhite {...props} />
));

ManageWhiteIcon.displayName = "ManageWhiteIcon";
export default ManageWhiteIcon;
