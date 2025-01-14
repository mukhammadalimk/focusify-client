import React, { useEffect, useState } from "react";
import ModalBackdrop from "../ModalBackdrop";
import { AnimatePresence, motion } from "framer-motion";
import SettingsWhiteIcon from "@/components/icons/SettingsWhiteIcon";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import NotificationItem from "./NotificationItem";
import { sampleNotifications } from "@/data";

const notificationAnimation = {
  initial: { x: "100%" }, // Start off-screen to the right
  animate: { x: 0 }, // Slide into the viewport
  exit: { x: "100%" }, // Slide back off-screen to the left
  transition: { duration: 0.3, ease: "easeInOut" },
};

const NotificationsModal = ({ onClose, isOpen }: NotificationsProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // Show the modal immediately when opening
    } else {
      // Delay hiding the modal to allow the animation to play
      const timeout = setTimeout(() => setIsVisible(false), 300); // 300ms matches the CSS animation duration
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <ModalBackdrop
      containerId="ipad-pro-root"
      onClose={onClose}
      isOpen={isVisible}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="max-w-[430px] w-full bg-white dark:bg-[#181A20] h-full absolute top-0 right-0 px-3 md:px-4 pt-3 flex flex-col"
            {...notificationAnimation}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <div className="flex justify-between items-center">
              <ArrowLeftIcon
                className="fill-[#212121] dark:fill-[#fff] cursor-pointer"
                onClick={onClose}
              />
              <h4 className="font-bold header-4 md:text-[28px]">
                Notifications
              </h4>

              <SettingsWhiteIcon className="dark:fill-white fill-[#212121] h-7 w-7" />
            </div>

            {/* Scrollable Notifications List */}
            <div className="mt-6 grid gap-4 break_500:gap-6 overflow-y-auto flex-grow no-scrollbar pb-4">
              {sampleNotifications.map((item) => (
                <NotificationItem key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalBackdrop>
  );
};

interface NotificationsProps {
  onClose: () => void;
  isOpen: boolean;
}

export default NotificationsModal;
