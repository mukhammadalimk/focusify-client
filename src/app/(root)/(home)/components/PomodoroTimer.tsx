"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import { formatTime } from "@/utils";

const PomodoroTimer = ({
  duration,
  started,
  onSessionEnd,
  whichSession,
  numberOfSessions,
  id,
  isBreak,
  allFinished,
}: PomodoroTimerProps) => {
  const { mode } = useTheme();
  const [remainingTime, setRemainingTime] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(true);
  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset =
    circumference * (1 - remainingTime / (duration * 60));

  // Restart the timer when duration is changed
  useEffect(() => {
    setRemainingTime(duration * 60);
  }, [duration]);

  // Toggle timer state
  useEffect(() => {
    setIsRunning(started);
  }, [started]);

  // To continuously update timer time
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          setIsRunning(false);
          setTimeout(() => onSessionEnd(id), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onSessionEnd, id]);

  return (
    <div className="relative">
      <div className="big-background-cicle"></div>

      <div className="pomodoro-outer-circle">
        <svg
          className="w-full h-full transition-all transform -rotate-90"
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
            {!allFinished
              ? isBreak
                ? "Short Break"
                : `${whichSession} of ${numberOfSessions} session${
                    numberOfSessions > 1 ? "s" : ""
                  }`
              : ""}

            {allFinished && "Congratulations!"}
          </span>
        </div>
      </div>
    </div>
  );
};

interface PomodoroTimerProps {
  duration: number;
  started: boolean;
  onSessionEnd: (id: string) => void;
  whichSession: number;
  numberOfSessions: number;
  id: string;
  isBreak: boolean;
  allFinished: boolean;
}

export default PomodoroTimer;
