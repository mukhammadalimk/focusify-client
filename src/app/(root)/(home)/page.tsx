"use client";

import MainContent from "./components/MainContent";
import SelectTask from "@/components/select-task/SelectTask";
import NotificationIcon from "@/components/icons/NotificationIcon";
import LogoSmallWhiteIcon from "@/components/icons/LogoSmallWhiteIcon";
import { useState } from "react";
import NotificationsModal from "@/components/modals/notification/NotificationsModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NotificationsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="bg-[#FF6347] flex-1 h-full px-3 md:px-4 pt-3 flex flex-col">
        <div className="flex justify-between items-center">
          <LogoSmallWhiteIcon />
          <h4 className="font-bold header-4 md:text-[28px] text-white">
            Focusify
          </h4>

          <NotificationIcon
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer"
          />
        </div>

        <div className="mt-6 flex flex-col flex-1 pb-[94px]">
          <SelectTask />

          <MainContent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
