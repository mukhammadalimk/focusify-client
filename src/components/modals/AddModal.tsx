import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import { AddModalIcon, PaperPlusIcon, SuitcaseIcon, TagIcon } from "../icons";
import AddTaskPanel from "../panels/AddTaskPanel";

const AddModal = ({ isModalOpen, onClose }: AddModalProps) => {
  const [addTaskPanelOpen, setAddTaskPanelOpen] = useState(false);

  return (
    <>
      <AddTaskPanel
        isPanelOpen={addTaskPanelOpen}
        onClose={() => setAddTaskPanelOpen(false)}
      />

      <ModalBackdrop
        isOpen={isModalOpen}
        containerId="ipad-pro-root"
        onClose={onClose}
      >
        <motion.div
          className="w-[185px] h-[202px] rounded-xl z-20 absolute right-5 bottom-[150px] py-5 px-6 will-change-transform"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <AddModalIcon className="absolute inset-0 -z-10 text-white dark:text-[#262A35]" />

          <div
            className="border-b border-[#EEEEEE] dark:border-[#35383F] flex gap-4 items-center pb-4 cursor-pointer z-10"
            onClick={() => {
              setAddTaskPanelOpen(true);
              onClose();
            }}
          >
            <PaperPlusIcon className="z-10" />
            <span className="body-x-large font-semibold z-10">Task</span>
          </div>

          <div className="border-b border-[#EEEEEE] dark:border-[#35383F] flex gap-4 items-center py-4 cursor-pointer z-10">
            <SuitcaseIcon className="z-10" />
            <span className="body-x-large font-semibold z-10">Project</span>
          </div>
          <div className="flex gap-4 items-center pt-4 cursor-pointer z-10">
            <TagIcon className="z-10" />
            <span className="body-x-large font-semibold z-10">Tags</span>
          </div>
        </motion.div>
      </ModalBackdrop>
    </>
  );
};

interface AddModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

export default AddModal;
