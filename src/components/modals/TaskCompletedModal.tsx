import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import IntroTextsBox from "../shared/IntroTextsBox";
import taskCompletedImage from "@/assets/images/task-completed.png";
import PanelButtons from "../panels/PanelButtons";

const TaskCompletedModal = ({
  isModalOpen,
  onClose,
  taskName,
}: TaskCompletedModalProps) => {
  // Play the sound
  useEffect(() => {
    if (isModalOpen) {
      const audio = new Audio("/audio/task-completed.wav");
      setTimeout(() => audio.play(), 300);

      return () => {
        audio.pause(); // Stop audio if the modal is closed before it finishes
        audio.currentTime = 0; // Reset playback position
      };
    }
  }, [isModalOpen]);

  return (
    <ModalBackdrop isOpen={isModalOpen} containerId="ipad-pro-root">
      <motion.div
        className="bg-white dark:bg-[#181A20] w-full h-full text-center z-51 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full h-full grid place-items-center px-3  ">
          <div className="pb-[70px] break_400:pb-[91px] break_500:pb-[107px]">
            <Image
              src={taskCompletedImage.src}
              alt="Congratulations image"
              className="w-[335px] break_400:w-[375px] break_600:w-[400px] transition-all mx-auto mb-8"
              width={taskCompletedImage.width}
              height={taskCompletedImage.height}
            />

            <IntroTextsBox
              mainText="Congratulations!"
              subText={`You've completed the task “${taskName}”`}
            />
          </div>
        </div>

        <PanelButtons
          onCancel={onClose}
          onSave={onClose}
          style="fixed bottom-0"
          texts={["Back to Home", "Continue"]}
        />
      </motion.div>
    </ModalBackdrop>
  );
};

interface TaskCompletedModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  taskName: string;
}

export default TaskCompletedModal;
