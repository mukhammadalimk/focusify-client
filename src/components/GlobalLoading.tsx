"use client";
import LogoIcon from "./icons/LogoIcon";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingWhiteIcon from "./icons/LoadingWhiteIcon";

const user = true;

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
          <LogoIcon className="h-[200px] w-[200px]" />
          <h1 className="font-semibold text-white text-5xl mt-7">Focusify</h1>
        </div>

        <div className="absolute bottom-20">
          <LoadingWhiteIcon className="animate-spin" />
        </div>
      </div>
    );
  }

  return <>{children}</>; // Render the actual content after loading
};

export default GlobalLoading;
