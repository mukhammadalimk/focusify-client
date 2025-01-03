import React from "react";
import Logo from "@/assets/icons/logo.svg";
import LoadingIcon from "@/assets/icons/loading.svg";

const EnteranceLoadingPage = () => {
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
};

export default EnteranceLoadingPage;
