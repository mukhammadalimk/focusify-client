"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeProvider";

const PomodoroTimer = ({ duration }: PomodoroTimerProps) => {
  const { mode } = useTheme();
  const [remainingTime, setRemainingTime] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(true);
  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset =
    circumference * (1 - remainingTime / (duration * 60));

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="relative">
      <div className="big-background-cicle"></div>

      <div className="pomodoro-outer-circle">
        {/* SVG Circle */}
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            strokeWidth="13.5"
            fill="none"
            stroke={mode === "dark" ? `#262A35` : "#F5F5F5"}
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            strokeWidth="14"
            fill="none"
            stroke="#FF6347"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-stroke-dashoffset duration-1000 linear"
          />
        </svg>

        <div className="text-center absolute">
          <h1 className="font-bold text-[56px] break_400:text-[64px] transition-all duration-300 leading-[1.2032]">
            {formatTime(remainingTime)}
          </h1>
          <span className="font-normal body-x-large transition-all duration-300 text-[#616161] dark:text-[#EEEEEE]">
            1 of 4 sessions
          </span>
        </div>
      </div>
    </div>
  );
};

interface PomodoroTimerProps {
  duration: number;
}

export default PomodoroTimer;
