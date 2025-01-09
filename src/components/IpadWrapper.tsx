import React from "react";

const IpadWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ipad-pro-container">
      <div
        className="ipad-pro relative bg-white dark:bg-[#181A20] min-w-[360px]"
        id="ipad-pro"
      >
        {children}
        <div id="ipad-pro-root"></div>
      </div>
    </div>
  );
};

export default IpadWrapper;
