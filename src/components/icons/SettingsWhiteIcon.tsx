import React from "react";
import SettingsWhite from "@/assets/icons/settings-white.svg";

const SettingsWhiteIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <SettingsWhite {...props} />
));

SettingsWhiteIcon.displayName = "SettingsWhiteIcon";
export default SettingsWhiteIcon;
