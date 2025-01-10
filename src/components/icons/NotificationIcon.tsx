import React from "react";
import Notification from "@/assets/icons/notification.svg";

const NotificationIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <Notification {...props} />
));

NotificationIcon.displayName = "NotificationIcon";
export default NotificationIcon;
