import React, { ReactNode } from "react";
import Portal from "./Portal";
import { motion } from "framer-motion";

const ModalBackdrop: React.FC<ModalBackdropProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-[#212121]/50 backdrop-blur-sm md:rounded-[20px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </Portal>
  );
};

interface ModalBackdropProps {
  isOpen: boolean;
  children: ReactNode;
}

export default ModalBackdrop;
