import React from "react";
import EmailIcon from "@/assets/icons/email.svg";
import LockIcon from "@/assets/icons/lock.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import EyeOffIcon from "@/assets/icons/eye-off.svg";
import NameIcon from "@/assets/icons/profile.svg";

export enum IconName {
  Email = "email",
  Lock = "lock",
  Eye = "eye",
  EyeOff = "eyeOff",
  Name = "name",
}

const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case IconName.Name:
      return (
        <NameIcon className="fill-[#212121] dark:fill-[#fff] absolute bottom-[22px] w-5 h-[21px] left-5" />
      );
    case IconName.Email:
      return (
        <EmailIcon className="fill-[#212121] dark:fill-[#fff] absolute bottom-[22px] left-5" />
      );
    case IconName.Lock:
      return (
        <LockIcon className="fill-[#212121] dark:fill-[#fff] absolute bottom-[22px] left-5" />
      );
    case IconName.Eye:
      return (
        <EyeOffIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer w-5 h-[21px]" />
      );
    case IconName.EyeOff:
      return (
        <EyeIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer w-5 h-[21px]" />
      );
    default:
      return null;
  }
};

const Input = ({
  type,
  text,
  placeholder,
  id,
  iconName,
  passwordShown,
  setPasswordShown,
}: InputProps) => {
  return (
    <div className="flex flex-col relative gap-2 w-full max-w-[400px]">
      <label
        htmlFor={id}
        className="font-semibold text-[18px] leading-[1.6] tracking-[0.2px] text-[#212121] dark:text-[#ffffff] ml-[1px]"
      >
        {text}
      </label>
      {getIcon(iconName)}
      <input
        type={passwordShown && type === "password" ? "text" : type}
        id={id}
        aria-label={text}
        autoCapitalize="off"
        autoCorrect="off"
        placeholder={placeholder}
        className="placeholder-[#9E9E9E] placeholder:font-normal font-semibold text-[18px] leading-[1.6] tracking-[0.2px] text-[#212121] dark:text-[#ffffff] bg-[#FAFAFA] dark:bg-[#1F222A] h-[65px] pl-[52px] pr-5 py-[18px] outline-none rounded-[10px] border border-[#EEEEEE] dark:border-[#35383F] input-autofill"
      />

      {type === "password" && (
        <div
          className="absolute right-5 bottom-[22px] w-5 h-[21px] cursor-pointer"
          onClick={() => setPasswordShown?.(!passwordShown)}
        >
          {passwordShown ? getIcon(IconName.Eye) : getIcon(IconName.EyeOff)}
        </div>
      )}
    </div>
  );
};

interface InputProps {
  type: "text" | "email" | "password";
  text: string;
  placeholder: string;
  id: string;
  iconName: IconName;
  passwordShown?: boolean;
  setPasswordShown?: (arg: boolean) => void;
}

export default Input;
