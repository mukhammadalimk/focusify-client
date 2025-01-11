import Portal from "./Portal";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  isOpen,
  children,
  containerId,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <Portal containerId={containerId}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-[#212121]/50 backdrop-blur-sm md:rounded-[20px] z-[200]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={onClose}
      >
        {children}
      </motion.div>
    </Portal>
  );
};

interface ModalBackdropProps {
  isOpen: boolean;
  children: ReactNode;
  containerId: string;
  onClose?: () => void;
}

export default ModalBackdrop;
