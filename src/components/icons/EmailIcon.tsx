import React from "react";
import Email from "@/assets/icons/email.svg";

const EmailIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Email {...props} />
));

EmailIcon.displayName = "EmailIcon";
export default EmailIcon;
