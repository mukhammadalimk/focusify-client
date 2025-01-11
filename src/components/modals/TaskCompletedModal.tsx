import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import IntroTextsBox from "../shared/IntroTextsBox";
import PrimaryButton from "../buttons/PrimaryButton";
import taskCompletedImage from "@/assets/images/task-completed.png";

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
        className="bg-white dark:bg-[#181A20] w-full h-full text-center z-55"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center px-3">
            <div>
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

          <div className="w-full flex justify-around gap-4 border-t border-[#F5F5F5] dark:border-[#35383F] p-6">
            <PrimaryButton
              text="Back to Home"
              className="bg-[#FFF3F0] dark:bg-[#35383F] text-[#FF6347] dark:text-white"
              onClick={onClose}
            />

            <PrimaryButton
              text="Continue"
              className="bg-[#FF6347] text-white"
            />
          </div>
        </div>
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
