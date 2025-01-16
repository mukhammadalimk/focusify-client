"use client";

import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import LoadingRedIcon from "@/components/icons/LoadingRedIcon";
import SettingsWhiteIcon from "@/components/icons/SettingsWhiteIcon";
import NotificationItem from "@/components/notifications/NotificationItem";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import { sampleNotifications } from "@/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Notifications = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full bg-white dark:bg-[#181A20] h-screen md:h-[854px] px-3 md:px-4 flex flex-col">
      {/* Header Section */}
      <TopNavbarWrapper>
        <Link href="/">
          <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
        </Link>

        <h4 className="font-bold header-4 md:text-[28px]">Notifications</h4>

        <SettingsWhiteIcon className="dark:fill-white fill-[#212121] h-7 w-7" />
      </TopNavbarWrapper>

      {loading && (
        <div className="w-full mt-28">
          <LoadingRedIcon className="animate-spin mx-auto" />
        </div>
      )}

      {/* Scrollable Notifications List */}
      {!loading && (
        <div className="grid gap-4 break_500:gap-6 overflow-y-auto flex-grow no-scrollbar pb-[70px] md:pb-[80px] pt-[70px]">
          {sampleNotifications.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
