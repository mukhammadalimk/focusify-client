import React from "react";
import Footer from "@/components/Footer";
import GlobalLoading from "@/components/GlobalLoading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalLoading>
      <div className="w-full h-full">
        {children}
        <Footer />
      </div>
    </GlobalLoading>
  );
};

export default Layout;
