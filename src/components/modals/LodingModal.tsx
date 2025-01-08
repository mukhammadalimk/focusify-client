import React from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import LoadingIcon from "@/assets/icons/loading-red.svg";

const LodingModal = ({ isModalOpen, text }: LodingModalProps) => {
  return (
    <ModalBackdrop isOpen={isModalOpen}>
      <motion.div
        className="bg-white dark:bg-[#1F222A] max-w-[440px] min-w-[340px] rounded-xl p-8 text-center z-55"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <LoadingIcon className="animate-spin mx-auto mb-6" />
        <h5 className="font-semibold text-[20px] leading-[1.6]">{text}</h5>
      </motion.div>
    </ModalBackdrop>
  );
};

interface LodingModalProps {
  isModalOpen: boolean;
  text: string;
}

export default LodingModal;
