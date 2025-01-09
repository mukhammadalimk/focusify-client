import PrimaryButton from "@/components/buttons/PrimaryButton";

const AuthButtons = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <PrimaryButton
        text="Sign up"
        className="text-[#fff] bg-[#ff6347]"
        link="/signup"
      />
      <PrimaryButton
        text="Log in"
        link="/login"
        className="text-[#FF6347] dark:text-[#FFFFFF] bg-[#FFF3F0] dark:bg-[#35383F] dark:border-[#000000]"
      />
    </div>
  );
};

export default AuthButtons;
