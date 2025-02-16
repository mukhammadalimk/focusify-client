import Portal from "./Portal";
import { motion } from "framer-motion";
import React, { ReactNode, useEffect } from "react";

const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  children,
  containerId,
  onClose,
}) => {
  useEffect(() => {
    // Add overflow: hidden to the body when modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to ensure no lingering styles
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Portal containerId={containerId}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-[#212121]/50 backdrop-blur-sm md:rounded-[20px] z-[50] overscroll-y-none"
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
  children: ReactNode;
  containerId: string;
  onClose?: () => void;
}

export default ModalBackdrop;
