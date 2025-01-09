import React from "react";

const IpadWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ipad-pro-container">
      <div
        className="ipad-pro relative bg-white dark:bg-[#181A20]"
        id="ipad-pro-root"
      >
        {children}
      </div>
    </div>
  );
};

export default IpadWrapper;
