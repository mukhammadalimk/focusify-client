import React from "react";
import ManageRed from "@/assets/icons/category-red.svg";

const ManageRedIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <ManageRed {...props} />
));

ManageRedIcon.displayName = "ManageRedIcon";
export default ManageRedIcon;
