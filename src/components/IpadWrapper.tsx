import React from "react";

const IpadWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ipad-pro-container">
      <div className="ipad-pro">{children}</div>
    </div>
  );
};

export default IpadWrapper;
