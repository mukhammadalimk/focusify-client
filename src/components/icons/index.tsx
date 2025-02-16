import React, { forwardRef } from "react";
import ThreeDotsSvg from "@/assets/icons/three-dots.svg";
import SettingSunSvg from "@/assets/icons/setting-sun-icon.svg";
import PlannedSvg from "@/assets/icons/planned-icon.svg";
import Calendar2Svg from "@/assets/icons/calendar-2.svg";
import CompletedSvg from "@/assets/icons/completed-icon.svg";
import TrashSvg from "@/assets/icons/trash-icon.svg";
import SuitcaseSvg from "@/assets/icons/suitcase-icon.svg";
import SuitcaseFillSvg from "@/assets/icons/suitcase-icon-fill.svg";
import PaperPlusSvg from "@/assets/icons/paper-plus-icon.svg";
import TagSvg from "@/assets/icons/tag-icon.svg";
import TagFillSvg from "@/assets/icons/tag-icon-fill.svg";
import AddModalSvg from "@/assets/icons/add-modal.svg";
import CheckSvg from "@/assets/icons/check-icon.svg";
import XSvg from "@/assets/icons/x-icon.svg";
import ArrowLeftSvg from "@/assets/icons/arrow-left.svg";
import SettingsWhiteSvg from "@/assets/icons/settings-white.svg";
import NotificationSvg from "@/assets/icons/notification.svg";

// Wrapper function to allow all props (className, onClick, etc.)
// Wrapper function with displayName and full SVGProps support
const IconWrapper = (SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>) => {
  const WrappedIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
    (props, ref) => <SvgComponent ref={ref} {...props} />
  );

  WrappedIcon.displayName = SvgComponent.name || "Icon";
  return WrappedIcon;
};

export const ThreeDotsIcon = IconWrapper(ThreeDotsSvg);
export const SettingSunIcon = IconWrapper(SettingSunSvg);
export const PlannedIcon = IconWrapper(PlannedSvg);
export const Calendar2Icon = IconWrapper(Calendar2Svg);
export const CompletedIcon = IconWrapper(CompletedSvg);
export const TrashIcon = IconWrapper(TrashSvg);
export const SuitcaseIcon = IconWrapper(SuitcaseSvg);
export const PaperPlusIcon = IconWrapper(PaperPlusSvg);
export const TagIcon = IconWrapper(TagSvg);
export const AddModalIcon = IconWrapper(AddModalSvg);
export const CheckIcon = IconWrapper(CheckSvg);
export const TagFillIcon = IconWrapper(TagFillSvg);
export const SuitcaseFillIcon = IconWrapper(SuitcaseFillSvg);
export const XIcon = IconWrapper(XSvg);
export const ArrowLeftIcon = IconWrapper(ArrowLeftSvg);
export const SettingsWhiteIcon = IconWrapper(SettingsWhiteSvg);
export const NotificationIcon = IconWrapper(NotificationSvg);
