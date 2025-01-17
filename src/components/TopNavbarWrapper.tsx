import React from "react";

const TopNavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center h-[60px] w-full border-b border-[#EEEEEE] dark:border-[#35383F] fixed md:absolute top-0 left-0 px-3 md:px-4 bg-white dark:bg-[#181A20] z-[20]">
      {children}
    </div>
  );
};

export default TopNavbarWrapper;
