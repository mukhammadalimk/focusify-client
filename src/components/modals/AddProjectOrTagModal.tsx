import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import TopNavbarWrapper from "../TopNavbarWrapper";
import { CheckIcon, ThreeDotsIcon, XIcon } from "../icons";
import Input, { IconName } from "../Input";
import { colors } from "@/data";
import PanelButtons from "../panels/PanelButtons";

const AddProjectOrTagModal = ({ type, onClose }: AddProjectOrTagModalProps) => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <ModalBackdrop containerId="ipad-pro-root">
      <motion.div
        className="bg-white dark:bg-[#181A20] z-50 absolute inset-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <TopNavbarWrapper>
          <XIcon onClick={onClose} />
          <h4 className="font-bold header-4">Add New {type}</h4>

          <ThreeDotsIcon />
        </TopNavbarWrapper>

        <div className="overflow-y-auto no-scrollbar h-full pb-[85px] pt-[75px] px-3 md:px-4">
          <Input
            type="text"
            text={`${type} Name`}
            placeholder={`${type} Name`}
            id={`${type.toLowerCase()}-name`}
            containerStyle="w-full max-w-none mb-6"
            iconName={IconName.Project}
          />

          <span className="body-x-large font-semibold">{type} Color Mark</span>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(52px,1fr))] gap-4 w-full mt-4">
            {colors.map((color) => (
              <div
                className="h-[52px] w-[52px] rounded-full grid place-items-center cursor-pointer"
                key={color}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && (
                  <CheckIcon className="text-white" />
                )}
              </div>
            ))}
          </div>
        </div>

        <PanelButtons
          onCancel={onClose}
          onSave={onClose}
          style="fixed bottom-0"
          texts={["Cancel", "Add"]}
        />
      </motion.div>
    </ModalBackdrop>
  );
};

interface AddProjectOrTagModalProps {
  type: "Tag" | "Project";
  onClose: () => void;
}

export default AddProjectOrTagModal;
