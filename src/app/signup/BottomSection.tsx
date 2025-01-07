import SocialButtonsContainer from "@/components/shared/SocialButtonsContainer";

const BottomSection = () => {
  return (
    <>
      <p className="font-normal text-[18px] leading-[1.6] tracking-[0.2px] text-[#212121] dark:text-[#ffffff] text-center mt-6">
        Already have an account?
        <a
          href="/login"
          className="font-semibold text-[18px] leading-[1.6] tracking-[0.2px] text-[#FF6347] ml-2"
        >
          Log in
        </a>
      </p>

      <div className="flex flex-col gap-5 mb-6 mt-5">
        <div className="flex items-center gap-4">
          <div className="border dark:border-[#4a4e56] border-b-0 flex-1"></div>
          <div className="font-medium text-[18px] leading-[1.6] text-[#616161] dark:text-[#EEEEEE]">
            or
          </div>
          <div className="border dark:border-[#4a4e56] border-b-0 flex-1"></div>
        </div>

        <SocialButtonsContainer />
      </div>
    </>
  );
};

export default BottomSection;
