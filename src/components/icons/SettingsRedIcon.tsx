import React from "react";
import SettingsRed from "@/assets/icons/settings-red.svg";

const SettingsRedIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <SettingsRed {...props} />
));

SettingsRedIcon.displayName = "SettingsRedIcon";
export default SettingsRedIcon;
