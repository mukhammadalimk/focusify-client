"use client";
import React, { useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Input, { IconName } from "@/components/Input";

const MainSection = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
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
        link="/signup"
      />
    </div>
  );
};

export default MainSection;
