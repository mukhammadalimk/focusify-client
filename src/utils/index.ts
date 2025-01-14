import { LOCAL_STORAGE_KEYS, TimerMode, WhiteNoise } from "@/types";

// Validate the color that comes from backend
export const isValidColor = (color: string): boolean =>
  /^#([0-9A-F]{3}){1,2}$/i.test(color);

// Format time
export const formatPomodoroTime = (time: number): string => {
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

// Helper function to format Date with relative time
export const formatDate = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime(); // Difference in milliseconds
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes === 1) return "1 minute ago";
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

  if (diffInHours === 1) return "1 hour ago";
  if (diffInHours < 24) return `${diffInHours} hours ago`;

  if (diffInDays === 1) return "1 day ago";
  if (diffInDays <= 7) return `${diffInDays} days ago`;

  if (diffInWeeks === 1) return "1 week ago";
  return `${diffInWeeks} weeks ago`;
};
