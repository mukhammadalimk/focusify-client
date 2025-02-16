import React from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import LoadingRedIcon from "../icons/LoadingRedIcon";

const LoadingModal = ({ text }: LoadingModalProps) => {
  return (
    <ModalBackdrop containerId="home-root">
      <motion.div
        className="bg-white dark:bg-[#1F222A] max-w-[440px] min-w-[340px] rounded-xl p-8 text-center z-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <LoadingRedIcon className="animate-spin mx-auto mb-6" />
        <h5 className="font-semibold header-5">{text}</h5>
      </motion.div>
    </ModalBackdrop>
  );
};

interface LoadingModalProps {
  text: string;
}

export default LoadingModal;
