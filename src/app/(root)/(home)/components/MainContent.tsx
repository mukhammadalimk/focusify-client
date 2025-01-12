"use client";
import { useState } from "react";
import PomodoroTimer from "./PomodoroTimer";
import PlayVectorIcon from "@/components/icons/PlayVectorIcon";
import PomodoroActionMenu from "./PomodoroActionMenu";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import TaskCompletedModal from "@/components/modals/TaskCompletedModal";

interface Session {
  id: string;
  duration: number;
  completed: boolean;
}

const sessionsArr: Session[] = [
  {
    id: "1",
    duration: 0.05,
    completed: false,
  },
  // {
  //   id: "2",
  //   duration: 0.05,
  //   completed: false,
  // },
  // {
  //   id: "3",
  //   duration: 0.2,
  //   completed: false,
  // },
];

const breakTime = 0.1;

const MainContent = () => {
  const [allFinished, setAllFinished] = useState(false);
  const [sessions, setSessions] = useState(sessionsArr);
  const [duration, setDuration] = useState(sessionsArr[0].duration);
  const [pomodoroStarted, setPomodoroStarted] = useState(false);
  const [pomodoroPaused, setPomodoroPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [currentSession, setCurrentSession] = useState(sessions[0]);
  const [taskCompleted, setTaskCompleted] = useState(false);

  const onStartPomodoro = () => {
    setPomodoroStarted(true);
    setPomodoroPaused(false);
  };

  const onPausePomodoro = () => {
    setPomodoroPaused(true);
    setPomodoroStarted(false);
  };

  const onContinuePomodoro = () => {
    setPomodoroPaused(false);
    setPomodoroStarted(true);
  };

  const onStopPomodoro = () => {
    setDuration(currentSession.duration);
    setPomodoroStarted(false);
    setPomodoroPaused(false);
    setIsBreak(false);
    setTimerKey((prevKey) => prevKey + 1);
  };

  const onStartBreak = () => {
    setIsBreak(true);
    setPomodoroStarted(true);
    setPomodoroPaused(false);
    setDuration(breakTime);
    setTimerKey((prevKey) => prevKey + 1);
  };

  const onSkipBreak = () => {
    const nextSession = sessions.find((s) => !s.completed);
    if (nextSession) {
      setCurrentSession(nextSession);
      setDuration(nextSession.duration);
      setIsBreak(false);
      setPomodoroStarted(false);
      setPomodoroPaused(false);
      setTimerKey((prevKey) => prevKey + 1);
    }
  };

  const onPomodoroOneSessionEnd = (id: string) => {
    const remainingSessions = sessions.filter((s) => !s.completed);

    if (!isBreak) {
      // Mark the current Pomodoro session as completed
      setSessions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, completed: true } : s))
      );

      if (remainingSessions.length === 1) {
        // If this was the last Pomodoro session, show alert and stop the process
        setTimeout(() => {
          setTaskCompleted(true);
        }, 10);

        setAllFinished(true);
        setPomodoroStarted(false);
        setPomodoroPaused(false);
        setIsBreak(false);
        setDuration(25);
        setTimerKey((prevKey) => prevKey + 1);
        return;
      }

      // Prepare for a break if more sessions remain
      setIsBreak(true);
      setPomodoroStarted(false);
      setPomodoroPaused(true);
      setDuration(breakTime); // Set break duration
    } else {
      // End the break and prepare for the next Pomodoro session
      const nextSession = remainingSessions[0];
      if (nextSession) {
        setCurrentSession(nextSession);
        setDuration(nextSession.duration);
        setIsBreak(false);
        setPomodoroStarted(false);
        setPomodoroPaused(false);
        setTimerKey((prevKey) => prevKey + 1); // Force timer to re-render
      }
    }
  };

  return (
    <>
      <TaskCompletedModal
        isModalOpen={taskCompleted}
        onClose={() => setTaskCompleted(false)}
        taskName="Create a Design Wireframe"
      />

      <div className="flex flex-1 flex-col mt-10 gap-10 items-center justify-between">
        <PomodoroTimer
          key={timerKey}
          duration={duration}
          started={pomodoroStarted && !pomodoroPaused}
          onSessionEnd={onPomodoroOneSessionEnd}
          whichSession={sessions.filter((s) => s.completed).length + 1}
          numberOfSessions={sessions.length}
          id={currentSession.id}
          isBreak={isBreak} // Pass isBreak to show "Short Break"
          allFinished={allFinished}
        />

        <div className="w-full flex justify-around gap-4">
          {pomodoroPaused && !isBreak && (
            <>
              <PrimaryButton
                text="Stop"
                className="bg-[#FFF3F0] dark:bg-[#35383F] max-w-[250px] text-[#FF6347] dark:text-white"
                onClick={onStopPomodoro}
                disabled={allFinished}
              />

              <PrimaryButton
                text="Continue"
                className="bg-[#FF6347] max-w-[250px] text-white"
                onClick={onContinuePomodoro}
                disabled={allFinished}
              />
            </>
          )}

          {isBreak && !pomodoroPaused && (
            <PrimaryButton
              text="Skip Break"
              className="bg-[#FF6347] text-white max-w-[250px]"
              onClick={onSkipBreak}
              disabled={allFinished}
            />
          )}

          {pomodoroPaused && isBreak && (
            <PrimaryButton
              text="Start break time"
              className="bg-[#FF6347] text-white max-w-[250px]"
              onClick={onStartBreak}
              disabled={allFinished}
            />
          )}

          {!pomodoroPaused && !isBreak && (
            <PrimaryButton
              text={pomodoroStarted ? "Pause" : "Start to Focus"}
              className={`bg-[#FF6347] text-[#FFFFFF] max-w-[250px] flex${
                pomodoroStarted
                  ? " bg-white dark:bg-[#181A20] border-2 border-[#FF6347] text-[#FF6347]"
                  : ""
              }`}
              disabled={allFinished}
              icon={
                !pomodoroStarted && (
                  <PlayVectorIcon className={`mr-2 break_500:mr-4`} />
                )
              }
              onClick={!pomodoroStarted ? onStartPomodoro : onPausePomodoro}
            />
          )}
        </div>

        <PomodoroActionMenu />
      </div>
    </>
  );
};

export default MainContent;
