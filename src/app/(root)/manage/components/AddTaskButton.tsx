"use client";
import React, { useState } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import AddModal from "@/components/modals/AddModal";
import AddTaskPanel from "@/components/panels/AddTaskPanel";
import AddProjectOrTagModal from "@/components/modals/AddProjectOrTagModal";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onToggleModal = () => setModalOpen((prev) => !prev);

  const [panels, setPanels] = useState({
    taskPanel: false,
    projectsPanel: false,
    tagsPanel: false,
  });

  const onOpenPanel = (type: string) => {
    setPanels((prev) => {
      return { ...prev, [type]: true };
    });
  };

  const onClosePanel = (type: string) => {
    setPanels((prev) => {
      return { ...prev, [type]: false };
    });
  };

  return (
    <>
      {modalOpen && (
        <AddModal
          onClose={() => setModalOpen(false)}
          onOpenPanel={onOpenPanel}
        />
      )}

      {panels.taskPanel && (
        <AddTaskPanel
          isPanelOpen={panels.taskPanel}
          onClose={() => onClosePanel("taskPanel")}
        />
      )}

      {panels.projectsPanel && (
        <AddProjectOrTagModal
          type="Project"
          onClose={() => onClosePanel("projectsPanel")}
        />
      )}

      {panels.tagsPanel && (
        <AddProjectOrTagModal
          type="Tag"
          onClose={() => onClosePanel("tagsPanel")}
        />
      )}

      <div
        className="w-14 h-14 rounded-full bg-[#FF6347] grid place-items-center absolute right-3 md:right-[15px] bottom-[76px] md:bottom-[86px] cursor-pointer transition-transform transform active:scale-[0.97]"
        style={{ zIndex: modalOpen ? "51" : "49" }}
        onClick={onToggleModal}
      >
        <PlusIcon
          className={`text-white fill-white transition-transform duration-100${
            modalOpen ? " rotate-45" : ""
          }`}
        />
      </div>
    </>
  );
};

export default AddTask;
