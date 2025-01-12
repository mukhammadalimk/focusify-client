import ModalBackdrop from "../modals/ModalBackdrop";
import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

const panelAnimation = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const PanelWrapper = ({
  isPanelOpen,
  onClose,
  height,
  children,
}: PropsWithChildren<PanelWrapperProps>) => {
  const [isVisible, setIsVisible] = useState(isPanelOpen);

  useEffect(() => {
    if (isPanelOpen) {
      setIsVisible(true); // Show the modal immediately when opening
    } else {
      // Delay hiding the modal to allow the animation to play
      const timeout = setTimeout(() => setIsVisible(false), 300); // 300ms matches the CSS animation duration
      return () => clearTimeout(timeout);
    }
  }, [isPanelOpen]);

  if (!isVisible) return null;

  return (
    <ModalBackdrop
      isOpen={isVisible}
      containerId="ipad-pro-root"
      onClose={onClose}
    >
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            role="dialog"
            aria-hidden={!isPanelOpen}
            style={{ height: height ? `${height}px` : "max-content" }}
            className="panel-wrapper"
            {...panelAnimation}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </ModalBackdrop>
  );
};

interface PanelWrapperProps {
  isPanelOpen: boolean;
  onClose: () => void;
  height?: number;
}

export default PanelWrapper;
