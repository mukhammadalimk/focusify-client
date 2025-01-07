const IntroTextsBox = ({
  mainText,
  subText,
  className,
}: IntroTextsBoxProps) => {
  return (
    <div className={className}>
      <h3 className="font-bold sm:text-[32px] leading-[1.6] text-[#212121] dark:text-[#ffffff] xsm:text-[24px]">
        {mainText}
      </h3>
      <p className="font-normal sm:text-[18px] leading-[1.6] tracking-[0.2px] text-[#616161] dark:text-[#eee] xsm:text-[16px]">
        {subText}
      </p>
    </div>
  );
};

interface IntroTextsBoxProps {
  mainText: string;
  subText: string;
  className: string;
}

export default IntroTextsBox;
