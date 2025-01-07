"use client";
import { useState } from "react";
import Input, { IconName } from "@/components/Input";
import LodingModal from "@/components/modals/LodingModal";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const MainSection = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSignupHandler = () => {
    setIsModalOpen(true);

    // It is temporary and will be changed later
    setInterval(() => {
      setIsModalOpen(false);
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <>
      <LodingModal isModalOpen={isModalOpen} text="Signing you up..." />

      <div className="flex flex-col gap-4 items-center">
        <Input
          type="email"
          text="Email"
          placeholder="Email"
          id="email"
          iconName={IconName.Email}
        />

        <Input
          type="password"
          text="Password"
          placeholder="Password"
          id="password"
          iconName={IconName.Lock}
          passwordShown={passwordShown}
          setPasswordShown={setPasswordShown}
        />

        <PrimaryButton
          text="Sign up"
          className="text-[#fff] bg-[#ff6347] mt-2"
          // link="/signup"
          onClick={onSignupHandler}
        />
      </div>
    </>
  );
};

export default MainSection;
