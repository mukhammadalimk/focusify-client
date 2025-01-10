import SocialButtonsContainer from "@/components/shared/SocialButtonsContainer";

type PageType = "login" | "signup";

const BottomSection = ({ type }: { type: PageType }) => {
  return (
    <>
      <p className="font-normal body-x-large text-center mt-6">
        {type === "login"
          ? "Don't have an account?"
          : "Already have an account?"}
        <a
          href={`/${type === "login" ? "signup" : "login"}`}
          className="font-semibold body-x-large text-[#FF6347] ml-2"
        >
          {type === "login" ? "Sign up" : "Log in"}
        </a>
      </p>

      <div className="flex flex-col gap-5 mb-6 mt-5">
        <div className="flex items-center gap-4">
          <div className="border dark:border-[#4a4e56] border-b-0 flex-1"></div>
          <div className="font-medium header-6 text-[#616161] dark:text-[#EEEEEE]">
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
