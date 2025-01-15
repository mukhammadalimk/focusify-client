import React from "react";
import ArrowRightVectorIcon from "@/components/icons/ArrowRightVectorIcon";
import { NotificationItemType } from "@/types";
import { formatDate } from "@/utils";
import getRelativeIcon from "./RelativeIcons";

const NotificationItem = ({ item }: NotificationItemProps) => {
  return (
    <div className="w-full grid gap-2 break_500:gap-3 grid-cols-[max-content_1fr_max-content_max-content] cursor-pointer">
      <div className="w-[40px] h-[40px] break_500:w-[45px] break_500:h-[45px] border border-[#EEEEEE] dark:border-[#35383F] rounded-full grid place-items-center">
        {getRelativeIcon(item.type)}
      </div>
      <div className="flex flex-col gap-1.5">
        <h6 className="text-[16px] font-bold header-6 break_400:text-[18px]">
          {item.title}
        </h6>
        <p className="body-medium-1-6 font-medium text-[#424242] dark:text-[#F5F5F5]">
          {item.description}
        </p>
        <span className="text-[#616161] dark:text-[#EEEEEE] body-small font-medium">
          {formatDate(item.created_at)}
        </span>
      </div>
      {!item.isRead && (
        <div className="bg-[#FF6347] w-3 h-3 rounded-full mt-3"></div>
      )}

      <div className="mt-[5px]">
        <ArrowRightVectorIcon className="fill-[#212121] dark:fill-white" />
      </div>
    </div>
  );
};

interface NotificationItemProps {
  item: NotificationItemType;
}

export default NotificationItem;
