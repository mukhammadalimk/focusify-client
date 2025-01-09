import AuthButtons from "./AuthButtons";
import LogoRed from "@/assets/icons/logo-red.svg";
import PrivacyAndTerms from "@/components/PrivacyAndTerms";
import IntroTextsBox from "@/components/shared/IntroTextsBox";
import SocialButtonsContainer from "../../../components/shared/SocialButtonsContainer";

const Welcome = () => {
  return (
    <div className="w-full h-full p-3 pb-6 flex flex-col justify-between gap-6">
      <div className="flex justify-center items-center self-center mt-8">
        <LogoRed className="w-20 md:w-28 h-20 md:h-28 transition-all" />
      </div>

      <div className="flex flex-col gap-8">
        <IntroTextsBox
          mainText="Let's Get Started"
          subText="Let's dive in into your account"
          className="flex flex-col items-center gap-2.5"
        />

        <SocialButtonsContainer />

        <AuthButtons />
      </div>

      <PrivacyAndTerms />
    </div>
  );
};

export default Welcome;
