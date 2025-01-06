"use client";

import { useState, useEffect } from "react";
import Logo from "@/assets/icons/logo.svg";
import LoadingIcon from "@/assets/icons/loading.svg";
import { usePathname } from "next/navigation";

const user = false;

const GlobalLoading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    // Show loading for 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 150);

    // Navigate only if on homepage and user is false
    if (pathname === "/" && !user) {
      window.location.href = "/welcome";
    }

    return () => clearTimeout(timer); // Cleanup timer
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="bg-[#ff6347] h-full flex items-center justify-center relative">
        <div className="w-max text-center mb-[90px]">
          <Logo className="h-[200px] w-[200px]" />
          <h2 className="font-semibold text-white text-5xl mt-7">Focusify</h2>
        </div>

        <div className="absolute bottom-20">
          <LoadingIcon className="animate-spin" />
        </div>
      </div>
    );
  }

  return <>{children}</>; // Render the actual content after loading
};

export default GlobalLoading;
