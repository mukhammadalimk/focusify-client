import Divider from "@/components/Divider";
import { ThreeDotsIcon } from "@/components/icons";
import LogoSmallWhiteIcon from "@/components/icons/LogoSmallIcon";
import Input, { IconName } from "@/components/Input";
import ProjectBox, { ProjectType } from "@/components/ProjectBox";
import TopNavbarWrapper from "@/components/TopNavbarWrapper";
import React from "react";
import GridSection from "./components/GridSection";
import AddTaskButton from "./components/AddTaskButton";
import Link from "next/link";

const Manage = () => {
  return (
    <div className="h-screen md:h-[854px] relative">
      <TopNavbarWrapper>
        <Link href="/">
          <LogoSmallWhiteIcon className="text-[#FF6347]" />
        </Link>

        <h4 className="font-bold header-4 md:text-[28px]">Focusify</h4>

        <ThreeDotsIcon />
      </TopNavbarWrapper>

      <div className="h-full overscroll-y-none">
        <div className="overflow-y-auto h-full no-scrollbar pb-[130px] md:pb-[140px] pt-[80px] px-3 md:px-4">
          <Input
            type="text"
            placeholder="Search task..."
            id="search-task"
            iconName={IconName.Search}
            containerStyle="max-w-none"
          />

          <GridSection>
            <ProjectBox
              color="#4AAF57"
              type={ProjectType.Today}
              title="Today"
              hours="6h 25m"
              numberOfPomodoros={4}
              link="/today"
            />

            <ProjectBox
              color="#1A96F0"
              type={ProjectType.Tomorrow}
              title="Tomorrow"
              hours="6h 40m"
              numberOfPomodoros={4}
              link="/tomorrow"
            />

            <ProjectBox
              color="#FF981F"
              type={ProjectType.ThisWeek}
              title="This Week"
              hours="13h 20m"
              numberOfPomodoros={10}
              link="/this-week"
            />

            <ProjectBox
              color="#9D28AC"
              type={ProjectType.Planned}
              title="Planned"
              hours="20h 50m"
              numberOfPomodoros={18}
              link="/planned"
            />

            <ProjectBox
              color="#8BC255"
              type={ProjectType.Completed}
              title="Completed"
              hours="100h 20m"
              numberOfPomodoros={41}
              link="/completed"
            />

            <ProjectBox
              color="#F54336"
              type={ProjectType.Trash}
              title="Trash"
              hours="5h 20m"
              numberOfPomodoros={6}
              link="/trash"
            />
          </GridSection>

          <div className="flex gap-4 items-center ">
            <span className="whitespace-nowrap font-semibold text-[16px] break_400:text-[18px] body-x-large text-[#9E9E9E]">
              Projects
            </span>
            <Divider />
          </div>

          <GridSection>
            {Array.from({ length: 18 }).map((_, i) => (
              <ProjectBox
                key={i}
                color="#4AAF57"
                type={ProjectType.Project}
                title="Pomodoro App"
                hours="6h 25m"
                numberOfPomodoros={4}
                link="/manage"
              />
            ))}
          </GridSection>
        </div>
      </div>

      <AddTaskButton />
    </div>
  );
};

export default Manage;
