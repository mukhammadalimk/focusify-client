import React from "react";
import SecurityIcon from "@/assets/icons/security-icon.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import InfoIcon from "@/assets/icons/info-icon.svg";
import StarIcon from "@/assets/icons/star-icon.svg";
import { NotificationType } from "@/types";
import LockIcon from "@/components/icons/LockIcon";

// Icon map for different notification types
const iconMap: Record<NotificationType, React.ReactNode> = {
  [NotificationType.Security]: <SecurityIcon className="notification-icon" />,
  [NotificationType.NewFeature]: <StarIcon className="notification-icon" />,
  [NotificationType.EventReminder]: (
    <CalendarIcon className="notification-icon" />
  ),
  [NotificationType.SystemUpdate]: <InfoIcon className="notification-icon" />,
  [NotificationType.PasswordReset]: <LockIcon className="notification-icon" />,
};

const getRelativeIcon = (type: NotificationType): React.ReactNode => {
  return iconMap[type] || null;
};

export default getRelativeIcon;
