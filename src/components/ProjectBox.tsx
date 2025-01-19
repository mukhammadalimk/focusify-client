import React, { JSX } from "react";
import SunIcon from "./icons/SunIcon";
import {
  Calendar2Icon,
  CompletedIcon,
  PlannedIcon,
  SettingSunIcon,
  SuitcaseIcon,
  TrashIcon,
} from "./icons";
import Link from "next/link";

const ProjectBox = ({
  color,
  type,
  title,
  hours,
  numberOfPomodoros,
  link,
}: ProjectBoxProps) => {
  return (
    <Link
      href={link}
      className="border flex flex-col rounded-[8px] cursor-pointer max-h-[98px] min-w-[163px] p-2.5 gap-1 break_400:p-3 break_400:gap-2 break_500:p-4"
      style={{ borderColor: color }}
    >
      <div className="flex items-center gap-1 w-full break_400:gap-2">
        <div style={{ color: color }}>{getIcon(type)}</div>
        <span className="body-large-1-6 font-medium truncate">{title}</span>
      </div>

      <h5 className="header-5 font-bold flex items-center gap-2">
        <span>{hours}</span>
        <span>({numberOfPomodoros})</span>
      </h5>
    </Link>
  );
};

interface ProjectBoxProps {
  color: string;
  type: ProjectType;
  title: string;
  link: string;
  hours?: string;
  numberOfPomodoros?: number;
}

export enum ProjectType {
  Today = "today",
  Tomorrow = "tomorrow",
  ThisWeek = "thisWeek",
  Planned = "planned",
  Completed = "completed",
  Trash = "trash",
  Project = "project",
}

const iconMap: Record<ProjectType, JSX.Element> = {
  [ProjectType.Today]: <SunIcon />,
  [ProjectType.Tomorrow]: <SettingSunIcon />,
  [ProjectType.ThisWeek]: <Calendar2Icon />,
  [ProjectType.Planned]: <PlannedIcon />,
  [ProjectType.Completed]: <CompletedIcon />,
  [ProjectType.Trash]: <TrashIcon />,
  [ProjectType.Project]: <SuitcaseIcon />,
};

const getIcon = (iconName: ProjectType) => iconMap[iconName] || <SunIcon />;

export default ProjectBox;
