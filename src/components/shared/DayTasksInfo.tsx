import React from "react";

const DayTasksInfo = () => {
  return (
    <div className="grid gap-4 grid-cols-2">
      <div className="border border-[#EEEEEE] dark:border-[#35383F] bg-white dark:bg-[#1F222A] rounded-lg p-3 text-center">
        <h4 className="header-4 font-semibold text-[#FF6347] mb-1">06:25</h4>
        <span className="body-small break_400:body-medium-1-6 text-[#616161] dark:text-[#EEEEEE]">
          Total Pomodoro Hours
        </span>
      </div>
      <div className="border border-[#EEEEEE] dark:border-[#35383F] bg-white dark:bg-[#1F222A] rounded-lg p-3 text-center">
        <h4 className="header-4 font-semibold text-[#FF6347] mb-1">06:25</h4>
        <span className="body-small break_400:body-medium-1-6 text-[#616161] dark:text-[#EEEEEE]">
          Elapsed Time
        </span>
      </div>
      <div className="border border-[#EEEEEE] dark:border-[#35383F] bg-white dark:bg-[#1F222A] rounded-lg p-3 text-center">
        <h4 className="header-4 font-semibold text-[#FF6347] mb-1">5</h4>
        <span className="body-small break_400:body-medium-1-6 text-[#616161] dark:text-[#EEEEEE]">
          Tasks Waiting
        </span>
      </div>
      <div className="border border-[#EEEEEE] dark:border-[#35383F] bg-white dark:bg-[#1F222A] rounded-lg p-3 text-center">
        <h4 className="header-4 font-semibold text-[#FF6347] mb-1">4</h4>
        <span className="body-small break_400:body-medium-1-6 text-[#616161] dark:text-[#EEEEEE]">
          Tasks Completed
        </span>
      </div>
    </div>
  );
};

export default DayTasksInfo;
