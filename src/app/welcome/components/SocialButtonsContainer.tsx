import Google from "@/assets/icons/google.svg";
import Apple from "@/assets/icons/apple.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
import SocialButton from "@/components/buttons/SocialButton";

const SocialButtonsContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <SocialButton text="Google" icon={<Google />} />
      <SocialButton
        text="Apple"
        icon={<Apple className="fill-black dark:fill-white" />}
      />
      <SocialButton text="Facebook" icon={<Facebook />} />
      <SocialButton text="Twitter" icon={<Twitter />} />
    </div>
  );
};

export default SocialButtonsContainer;
