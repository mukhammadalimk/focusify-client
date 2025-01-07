"use client";
import { useState } from "react";
import Input, { IconName } from "@/components/Input";
import LodingModal from "@/components/modals/LodingModal";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import RememberAndForgotPassword from "./RememberAndForgotPassword";

const MainSection = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onLoginHandler = () => {
    setIsModalOpen(true);

    // It is temporary and will be changed later
    setInterval(() => {
      setIsModalOpen(false);
      window.location.href = "/forgot-password";
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <LodingModal isModalOpen={isModalOpen} text="Logging you in..." />

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
        text="Log in"
        className="text-[#fff] bg-[#ff6347] mt-2"
        // link="/"
        onClick={onLoginHandler}
      />

      <RememberAndForgotPassword />
    </div>
  );
};

export default MainSection;
