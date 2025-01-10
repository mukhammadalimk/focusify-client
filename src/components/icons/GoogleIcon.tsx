import React from "react";
import Google from "@/assets/icons/google.svg";

const GoogleIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Google {...props} />
));

GoogleIcon.displayName = "GoogleIcon";
export default GoogleIcon;
