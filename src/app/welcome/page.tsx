import LogoRed from "@/assets/icons/logo-red.svg";
import AuthButtons from "./components/AuthButtons";
import PrivacyAndTerms from "@/components/PrivacyAndTerms";
import SocialButtonsContainer from "./components/SocialButtonsContainer";

const Welcome = () => {
  return (
    <div className="w-full h-full p-3 pb-6 flex flex-col justify-between gap-6">
      <div className="flex justify-center items-center self-center mt-8">
        <LogoRed className="w-20 md:w-28 h-20 md:h-28 transition-all" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2.5">
          <h3 className="font-bold text-[32px] leading-[1.6] text-[#212121] dark:text-[#ffffff] sm:text-[24px]">
            Let&apos;s Get Started
          </h3>
          <p className="font-normal text-[18px] leading-[1.6] tracking-[0.2px] text-[#616161] dark:text-[#eee]">
            Let&apos;s dive in into your account
          </p>
        </div>

        <SocialButtonsContainer />

        <AuthButtons />
      </div>

      <PrivacyAndTerms />
    </div>
  );
};

export default Welcome;
