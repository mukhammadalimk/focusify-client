import { twMerge } from "tailwind-merge";
import { ArrowLeftIcon } from "../icons";

const BackIconBox = ({ link, className }: BackIconBox) => {
  return (
    <a href={link} className={twMerge("mt-1", className)}>
      <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
    </a>
  );
};

interface BackIconBox {
  link: string;
  className?: string;
}

export default BackIconBox;
