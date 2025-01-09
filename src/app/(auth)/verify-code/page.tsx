"use client";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import BackIconBox from "@/components/shared/BackIconBox";
import AllSetContainer from "./components/AllSetContainer";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const VerifyCode = () => {
  const [verified, setVerified] = useState(false);

  // It is temporary and will be changed later
  const onVerifyHandler = () => {
    if (verified) return;
    setVerified(true);
  };

  useEffect(() => {
    // It is temporary and will be changed later
    if (verified) {
      setInterval(() => {
        window.location.href = "/";
      }, 3000);
    }
  }, [verified]);

  return (
    <div className="w-full h-full pt-3 md:pt-4 pb-6 md:pb-6 overflow-x-scroll flex flex-col justify-between select-none">
      <BackIconBox link="/forgot-password" className="pl-3 md:pl-4" />

      <div className="flex flex-col items-center px-3 md:px-4 mb-24">
        {!verified ? <MainContent /> : <AllSetContainer />}
      </div>

      <div className="border-t border-[#F5F5F5] dark:border-[#35383F] flex justify-center px-3 md:px-4">
        <PrimaryButton
          text={verified ? "Go to Homepage" : "Send Code"}
          className="text-[#fff] bg-[#ff6347] mt-6 disabled:bg-[#ff6347]/50 disabled:cursor-not-allowed"
          // link="/verify-code"
          onClick={onVerifyHandler}
        />
      </div>
    </div>
  );
};

export default VerifyCode;
