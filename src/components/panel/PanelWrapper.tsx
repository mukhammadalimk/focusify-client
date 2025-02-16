import ModalBackdrop from "../modals/ModalBackdrop";
import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

const panelAnimation = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const PanelWrapper = ({
  isPanelOpen,
  onClose,
  children,
}: PropsWithChildren<PanelWrapperProps>) => {
  return (
    <ModalBackdrop containerId="ipad-pro-root" onClose={onClose}>
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            role="dialog"
            aria-hidden={!isPanelOpen}
            style={{
              height: "max-content",
              maxHeight: "85%",
            }}
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
}

export default PanelWrapper;
