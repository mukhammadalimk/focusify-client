"use client";
import { useState } from "react";
import Input, { IconName } from "@/components/Input";
import LoadingModal from "@/components/modals/LoadingModal";
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
    <div className="flex flex-col gap-4 items-center">
      {isModalOpen && <LoadingModal text="Signing you up..." />}

      <Input
        type="text"
        label="Name"
        placeholder="Name"
        id="name"
        iconName={IconName.Name}
      />

      <Input
        type="email"
        label="Email"
        placeholder="Email"
        id="email"
        iconName={IconName.Email}
      />

      <Input
        type="password"
        label="Password"
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
  );
};

export default MainSection;
