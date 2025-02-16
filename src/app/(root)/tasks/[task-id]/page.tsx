"use client";

import {
  ArrowLeftIcon,
  CalendarIcon,
  CircleEmptyIcon,
  FlagIcon,
  NotificationIcon,
  PomodoroIcon,
  SuitcaseIcon,
  ThreeDotsIcon,
  TimerCircleIcon,
  CircleCheckmarkIcon,
  CancelIcon,
  PlusIcon,
  FileUploadIcon,
  FileIcon,
  TrashIcon,
} from "@/components/icons";
import SunIcon from "@/components/icons/SunIcon";
import Input, { IconName } from "@/components/Input";
import SelectTask from "@/components/select-task/SelectTask";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const TaskDetails = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (!file) return;
    setUploadedFile(file);
  };

  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#181A20] h-screen md:h-[854px]">
      <TopNavbarWrapper>
        <Link href="/manage">
          <ArrowLeftIcon className="fill-[#212121] dark:fill-[#fff] cursor-pointer" />
        </Link>

        <h4 className="font-bold header-4">Task</h4>

        <ThreeDotsIcon />
      </TopNavbarWrapper>

      <div className="overflow-y-auto h-full no-scrollbar px-3 md:px-4 pt-[80px] pb-[80px] md:pb-[90px] flex flex-col gap-6">
        <SelectTask selected />

        <div className="border border-[#EEEEEE] dark:border-[#35383F] rounded-lg px-5 bg-white dark:bg-[#1F222A]">
          <div className="flex justify-between py-5 gap-4">
            <div className="flex items-center gap-4">
              <TimerCircleIcon className="w-6 h-6 dark:text-white text-[#212121]" />
              <span className="body-large-1-6 font-semibold">Pomodoro</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="body-large-1-6 font-semibold">4</span>
              <TimerCircleIcon className="w-6 h-6 text-[#FF6347]" />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#EEEEEE] dark:bg-[#35383F]"></div>

          <div className="flex justify-between py-5 gap-4">
            <div className="flex items-center gap-4">
              <CalendarIcon className="w-6 h-6 dark:text-white text-[#212121]" />
              <span className="body-large-1-6 font-semibold">Due Date</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="body-large-1-6 font-semibold">Today</span>
              <SunIcon className="w-6 h-6 text-[#4AAF57]" />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#EEEEEE] dark:bg-[#35383F]"></div>

          <div className="flex justify-between py-5 gap-4">
            <div className="flex items-center gap-4">
              <FlagIcon className="w-6 h-6 dark:text-white text-[#212121]" />
              <span className="body-large-1-6 font-semibold">Priority</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="body-large-1-6 font-semibold">Medium</span>
              <FlagIcon className="w-6 h-6 text-[#FF981F]" />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#EEEEEE] dark:bg-[#35383F]"></div>

          <div className="flex justify-between py-5 gap-4">
            <div className="flex items-center gap-4">
              <SuitcaseIcon className="w-6 h-6 dark:text-white text-[#212121]" />
              <span className="body-large-1-6 font-semibold">Project</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="body-large-1-6 font-semibold">Pomodoro App</span>
              <SuitcaseIcon className="w-6 h-6 text-[#FF6347]" />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#EEEEEE] dark:bg-[#35383F]"></div>

          <div className="flex justify-between py-5 gap-4">
            <div className="flex items-center gap-4">
              <NotificationIcon className="w-6 h-6 dark:text-white text-[#212121]" />
              <span className="body-large-1-6 font-semibold">Reminder</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="body-large-1-6 font-semibold">None</span>
              <PomodoroIcon className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1F222A] border border-[#EEEEEE] dark:border-[#35383F] rounded-lg p-5 flex flex-col gap-7">
          <div className="flex items-center gap-4">
            <CircleCheckmarkIcon />
            <span className="body-x-large font-semibold text-[#9E9E9E] line-through decoration-[1px] flex-1 truncate">
              Define User Flow
            </span>
          </div>
          <div className="flex items-center gap-4">
            <CircleEmptyIcon />
            <span className="body-x-large font-semibold flex-1 truncate">
              Sketch Initial Layout
            </span>
          </div>
          <div className="flex items-center gap-4">
            <CircleEmptyIcon />
            <span className="body-x-large font-semibold flex-1 truncate">
              Finalize Wireframe
            </span>
          </div>
        </div>

        <Input
          type="text"
          placeholder="Add a subtask..."
          id="add-task"
          iconName={IconName.Plus}
          containerStyle="max-w-none"
        />

        <div className="flex flex-col gap-4">
          <span className="body-x-large font-semibold">Tags</span>

          <div className="flex gap-3 flex-wrap">
            <div className="border-[1.5px] border-[#1A96F0] flex gap-2 items-center rounded-full px-4 py-[4.5px]">
              <span className="body-medium-1-6 text-[#1A96F0] font-semibold capitalize">
                #work
              </span>

              <button>
                <CancelIcon className="fill-[#212121] dark:fill-white h-3.5 w-3.5" />
              </button>
            </div>
            <div className="border-[1.5px] border-[#8BC255] flex gap-2 items-center rounded-full px-4 py-[4.5px]">
              <span className="body-medium-1-6 text-[#8BC255] font-semibold capitalize">
                #design
              </span>
              <button>
                <CancelIcon className="fill-[#212121] dark:fill-white h-3.5 w-3.5" />
              </button>
            </div>
            <div className="border-[1.5px] border-[#9D28AC] flex gap-2 items-center rounded-full px-4 py-[4.5px]">
              <span className="body-medium-1-6 text-[#9D28AC] font-semibold capitalize">
                #productive
              </span>
              <button>
                <CancelIcon className="fill-[#212121] dark:fill-white h-3.5 w-3.5" />
              </button>
            </div>

            <button className="border border-[#E0E0E0] dark:border-[#35383F] rounded-full px-4 py-[9px] cursor-pointer">
              <PlusIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="body-x-large font-semibold">Add a note</span>

          <textarea
            name="note"
            id="note"
            placeholder="Add a note..."
            className="rounded-[10px] bg-white dark:bg-[#1F222A] border border-[#EEEEEE] dark:border-[#35383F] resize-none px-5 py-[18px] h-[120px] outline-none body-x-large font-semibold placeholder:font-normal"
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="body-x-large font-semibold">Add an attachment</span>

          <div className="rounded-[10px] bg-white dark:bg-[#1F222A] border border-[#EEEEEE] dark:border-[#35383F]">
            {uploadedFile ? (
              <div className="p-4 flex gap-3 items-center">
                <FileIcon />
                <span className="body-large-1-6 font-semibold flex-1 truncate">
                  {uploadedFile.name}
                </span>
                <button onClick={() => setUploadedFile(null)}>
                  <TrashIcon />
                </button>
              </div>
            ) : (
              <label
                htmlFor="file"
                className="h-[110px] grid place-items-center cursor-pointer"
              >
                <input
                  type="file"
                  id="file"
                  className="absolute inset-0 invisible"
                  onChange={onUploadFile}
                  accept="image/png, image/pdf, image/jpg, image/jpeg"
                />
                <div className="flex flex-col gap-2.5 items-center">
                  <FileUploadIcon />
                  <span className="body-x-large">Upload</span>
                </div>
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
