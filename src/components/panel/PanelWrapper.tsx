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
  height = 700,
  children,
}: PropsWithChildren<PanelWrapperProps>) => {
  const [isVisible, setIsVisible] = useState(isPanelOpen);

  useEffect(() => {
    if (isPanelOpen) {
      setIsVisible(true); // Show the panel immediately when opening
    } else {
      // Delay calling onClose until the animation completes
      const timeout = setTimeout(() => {
        setIsVisible(false);
        onClose(); // Call the parent's onClose after 300ms
      }, 290); // Match this duration with Framer Motion's exit animation

      return () => clearTimeout(timeout);
    }
  }, [isPanelOpen, onClose]);

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
            style={{ height: `${height}px` }}
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
  height: number;
}

export default PanelWrapper;
