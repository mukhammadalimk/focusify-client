import React from "react";
import { twMerge } from "tailwind-merge";
import EmailIcon from "./icons/EmailIcon";
import NameIcon from "./icons/NameIcon";
import SearchIcon from "./icons/SearchIcon";
import EyeOffIcon from "./icons/EyeOffIcon";
import LockIcon from "./icons/LockIcon";
import EyeIcon from "./icons/EyeIcon";
import { SuitcaseIcon } from "./icons";

export enum IconName {
  Email = "email",
  Lock = "lock",
  Eye = "eye",
  EyeOff = "eyeOff",
  Name = "name",
  Search = "search",
  Project = "project",
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
    case IconName.Search:
      return (
        <SearchIcon className="text-[#BDBDBD] absolute top-1/2 -translate-y-1/2 left-5 w-5 h-5" />
      );
    case IconName.Project:
      return (
        <SuitcaseIcon className="text-[#212121] dark:text-[#fff] absolute bottom-[22px] left-5 w-5 h-5" />
      );

    default:
      return <></>;
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
  withoutLabel,
  inputStyle,
  containerStyle,
}: InputProps) => {
  return (
    <div
      className={twMerge(
        `flex flex-col relative gap-2 w-full max-w-[400px]`,
        containerStyle
      )}
    >
      {!withoutLabel && (
        <label
          htmlFor={id}
          className="font-semibold text-[18px] leading-[1.6] tracking-[0.2px] ml-[1px]"
        >
          {text}
        </label>
      )}

      {getIcon(iconName)}

      <input
        type={passwordShown && type === "password" ? "text" : type}
        id={id}
        aria-label={text}
        autoCapitalize="off"
        autoCorrect="off"
        placeholder={placeholder}
        className={twMerge(
          `placeholder-[#9E9E9E] placeholder:font-normal font-semibold body-x-large bg-[#FAFAFA] dark:bg-[#1F222A] h-[65px] pl-[52px] pr-5 py-[18px] outline-none rounded-[10px] border border-[#EEEEEE] dark:border-[#35383F] input-autofill`,
          inputStyle
        )}
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
  withoutLabel?: boolean;
  inputStyle?: string;
  containerStyle?: string;
}

export default Input;
