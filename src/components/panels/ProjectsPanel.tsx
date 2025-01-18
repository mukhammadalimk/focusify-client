import PanelWrapper from "../panel/PanelWrapper";
import PanelHeader from "../panel/PanelHeader";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState } from "react";
import { CheckIcon, SuitcaseFillIcon } from "../icons";

interface Project {
  id: string;
  label: string;
  color: string;
}

const projects: Project[] = [
  { id: "1", label: "General", color: "#F54336" },
  { id: "2", label: "Pomodoro App", color: "#4AAF57" },
  { id: "3", label: "Fashion App", color: "#1A96F0" },
  { id: "4", label: "AI Chatbot App", color: "#00BCD3" },
  { id: "5", label: "Dating App", color: "#FF981F" },
  { id: "6", label: "Quiz App", color: "#8BC255" },
  { id: "7", label: "News App", color: "#7A5548" },
  { id: "8", label: "Work Project", color: "#9D28AC" },
];

const ProjectsPanel = ({ isPanelOpen, onClose }: ProjectsPanelProps) => {
  const [selectedProject, setSelectedProject] = useState("");

  const onSelectProject = (id: string) => {
    if (selectedProject === id) return;

    setSelectedProject(id);
  };

  return (
    <>
      <PanelWrapper isPanelOpen={isPanelOpen} onClose={onClose}>
        <PanelHeader title="Projects" withIcon />

        <div>
          {projects.map((item) => (
            <div
              className="grid items-center grid-cols-[max-content_1fr_max-content] gap-4 py-4 break_500:gap-6 break_500:py-5 cursor-pointer border-b border-[#EEEEEE] dark:border-[#35383F] last:border-b-0 select-none"
              key={item.id}
              onClick={() => onSelectProject(item.id)}
            >
              <SuitcaseFillIcon
                className="w-7 h-7"
                style={{ color: item.color, fill: item.color }}
              />
              <h6 className="header-6 font-semibold">{item.label}</h6>
              {selectedProject === item.id && <CheckIcon className="w-7 h-7" />}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-around gap-4 border-t border-[#F5F5F5] dark:border-[#35383F] p-6">
          <PrimaryButton
            text="Cancel"
            className="bg-[#FFF3F0] dark:bg-[#35383F] text-[#FF6347] dark:text-white"
            onClick={onClose}
          />

          <PrimaryButton text="Next" className="bg-[#FF6347] text-white" />
        </div>
      </PanelWrapper>
    </>
  );
};

interface ProjectsPanelProps {
  isPanelOpen: boolean;
  onClose: () => void;
}

export default ProjectsPanel;
