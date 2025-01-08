import Input, { IconName } from "@/components/Input";
import BackIconBox from "@/components/shared/BackIconBox";
import IntroTextsBox from "@/components/shared/IntroTextsBox";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const ForgotPassword = () => {
  return (
    <div className="w-full h-full pt-3 md:pt-4 pb-6 md:pb-6 overflow-x-scroll flex flex-col justify-between select-none">
      <BackIconBox link="/login" className="pl-3 md:pl-4" />

      <div className="flex flex-col items-center px-3 md:px-4 mb-24">
        <IntroTextsBox
          mainText="Forgot Your Password? 🔑"
          subText="No worries, we'll help you reset it. Please enter the email associated with your Focusify account."
          className="text-left mb-8 mt-6 max-w-[400px]"
        />

        <Input
          type="email"
          text="Your Registered Email"
          placeholder="Email"
          id="email"
          iconName={IconName.Email}
        />
      </div>

      <div className="border-t border-[#F5F5F5] dark:border-[#35383F] flex justify-center px-3 md:px-4">
        <PrimaryButton
          text="Send Code"
          className="text-[#fff] bg-[#ff6347] mt-6 disabled:bg-[#ff6347]/50 disabled:cursor-not-allowed"
          link="/verify-code"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
