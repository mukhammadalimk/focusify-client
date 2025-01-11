import React from "react";
import Footer from "@/components/Footer";
import GlobalLoading from "@/components/GlobalLoading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalLoading>
      <main className="w-full h-full">
        <section className="w-full h-full flex flex-1 flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </section>
      </main>
    </GlobalLoading>
  );
};

export default Layout;
