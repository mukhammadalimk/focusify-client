import OTPContainer from "./OTPContainer";
import IntroTextsBox from "@/components/shared/IntroTextsBox";

const MainContent = () => {
  return (
    <div>
      <IntroTextsBox
        mainText="Enter OTP Code 🔐"
        subText="We've sent you an OTP code to your registered email address. Please check your inbox and enter the code here."
        className="text-left mb-8 mt-6 max-w-[400px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      <OTPContainer />
    </div>
  );
};

export default MainContent;
