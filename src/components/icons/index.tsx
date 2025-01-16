import React, { forwardRef } from "react";
import ThreeDotsSvg from "@/assets/icons/three-dots.svg";
import SettingSunSvg from "@/assets/icons/setting-sun-icon.svg";
import PlannedSvg from "@/assets/icons/planned-icon.svg";
import Calendar2Svg from "@/assets/icons/calendar-2.svg";
import CompletedSvg from "@/assets/icons/completed-icon.svg";
import TrashSvg from "@/assets/icons/trash-icon.svg";
import SuitcaseSvg from "@/assets/icons/suitcase-icon.svg";
import PaperPlusSvg from "@/assets/icons/paper-plus-icon.svg";
import TagSvg from "@/assets/icons/tag-icon.svg";
import AddModalSvg from "@/assets/icons/add-modal.svg";

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
