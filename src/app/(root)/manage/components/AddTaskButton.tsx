"use client";
import React, { useState } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import AddModal from "@/components/modals/AddModal";
import AddTaskPanel from "@/components/panels/AddTaskPanel";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onToggleModal = () => setModalOpen((prev) => !prev);

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      {modalOpen && (
        <AddModal
          isModalOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onOpenPanel={() => setIsPanelOpen(true)}
        />
      )}

      {isPanelOpen && (
        <AddTaskPanel
          isPanelOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
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
