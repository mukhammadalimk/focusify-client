import Image from "next/image";
import { motion } from "framer-motion";
import allSetImage from "@/assets/images/all-set.png";
import IntroTextsBox from "@/components/shared/IntroTextsBox";

const AllSetContainer = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={allSetImage.src}
          alt="All Set Image"
          width={130}
          height={130}
        />
      </motion.div>

      <IntroTextsBox
        mainText="You're All Set!"
        subText="Congratulations! Your password has been changed successfully."
        className="text-center mt-6 max-w-[400px] flex flex-col gap-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default AllSetContainer;
