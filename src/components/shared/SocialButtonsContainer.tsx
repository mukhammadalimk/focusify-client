import AppleIcon from "../icons/AppleIcon";
import GoogleIcon from "../icons/GoogleIcon";
import TwitterIcon from "../icons/TwitterIcon";
import FacebookIcon from "../icons/FacebookIcon";
import SocialButton from "@/components/buttons/SocialButton";

const SocialButtonsContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <SocialButton text="Google" icon={<GoogleIcon />} />
      <SocialButton
        text="Apple"
        icon={<AppleIcon className="fill-black dark:fill-white" />}
      />
      <SocialButton text="Facebook" icon={<FacebookIcon />} />
      <SocialButton text="Twitter" icon={<TwitterIcon />} />
    </div>
  );
};

export default SocialButtonsContainer;
