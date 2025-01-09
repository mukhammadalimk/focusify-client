import BackIconBox from "@/components/shared/BackIconBox";
import PrivacyAndTerms from "@/components/PrivacyAndTerms";
import IntroTextsBox from "@/components/shared/IntroTextsBox";
import BottomSection from "../signup/components/BottomSection";
import MainSection from "./components/MainSection";

const Signup = () => {
  return (
    <div className="w-full h-full p-3 md:p-4 pb-6 md:pb-6 overflow-x-scroll flex flex-col select-none">
      <BackIconBox link="/welcome" />

      <section className="flex-1 flex flex-col justify-center">
        <IntroTextsBox
          mainText="Welcome Back! 👋"
          subText="Let's Get Back to Productivity"
          className="text-center mb-8 mt-6"
        />

        <MainSection />

        <BottomSection type="login" />
      </section>

      <PrivacyAndTerms />
    </div>
  );
};

export default Signup;
