import { LOCAL_STORAGE_KEYS, TimerMode, WhiteNoise } from "@/types";

// Validate the color that comes from backend
export const isValidColor = (color: string): boolean =>
  /^#([0-9A-F]{3}){1,2}$/i.test(color);

// Format time
export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

// Get saved timer mode from localStorage
export const getSavedTimerMode = (): TimerMode => {
  try {
    const savedTimerMode = localStorage.getItem(LOCAL_STORAGE_KEYS.TIMER_MODE);
    if (
      savedTimerMode &&
      Object.values(TimerMode).includes(savedTimerMode as TimerMode)
    ) {
      return savedTimerMode as TimerMode;
    }
  } catch (error) {
    console.error("Failed to retrieve timer mode from localStorage:", error);
  }
  return TimerMode.Countdown;
};

// Get saved white noise from localStorage
export const getSavedWhiteNoise = (): WhiteNoise => {
  try {
    const savedWhiteNoise = localStorage.getItem(
      LOCAL_STORAGE_KEYS.WHITE_NOISE
    );

    if (
      savedWhiteNoise &&
      Object.values(WhiteNoise).includes(savedWhiteNoise as WhiteNoise)
    ) {
      return savedWhiteNoise as WhiteNoise;
    }
  } catch (error) {
    console.error("Failed to retrieve white noise from localStorage:", error);
  }
  return WhiteNoise.None;
};
