"use client";
import PlusIcon from "@/components/icons/PlusIcon";
import AddModal from "@/components/modals/AddModal";
import React, { useState } from "react";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onToggleModal = () => setModalOpen((prev) => !prev);

  return (
    <>
      <AddModal isModalOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div
        className="w-14 h-14 rounded-full bg-[#FF6347] grid place-items-center absolute right-3 md:right-[15px] bottom-[76px] md:bottom-[86px] cursor-pointer transition-transform transform active:scale-[0.97] z-[201]"
        onClick={onToggleModal}
      >
        <PlusIcon
          className={`text-white fill-white transition-transform duration-100${
            modalOpen ? " rotate-45" : ""
          }`}
        />
      </div>
    </>
  );
};

export default AddTask;
