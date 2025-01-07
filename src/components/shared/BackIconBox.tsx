import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";

const BackIconBox = ({ link }: { link: string }) => {
  return (
    <a href={link} className="mt-2">
      <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
    </a>
  );
};

export default BackIconBox;
